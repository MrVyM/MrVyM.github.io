---
slug: intro-terraform-proxmox 
title: Introduction à Terraform avec Proxmox
tags:
- terraform
- proxmox
- devops
- hcl
- BPG 
authors: [mrvym] 
hide_title: false
date: 2024-12-02 
---
Le but de Terraform est de déployer une infrastructure ou une entité de manière **idempotente**. Cela signifie que l’on doit pouvoir relancer le script 100 fois et obtenir le même résultat à chaque exécution.  
Pour cela, nous utilisons un **provider**, qui est essentiellement une bibliothèque permettant de se connecter à notre serveur.

Dans ce cas pratique, nous allons utiliser **Proxmox** et **BPG**. Il existe deux principaux providers pour Proxmox :

- **[Telmate](https://registry.terraform.io/providers/Telmate/proxmox/latest/docs)**  
  C’est une bibliothèque qui permet de déployer très simplement des VMs et des LXCs.  
  Inconvénient : elle n’implémente pas de fonctionnalités avancées. Cependant, elle est fréquemment mise à jour.
  
- **[Bpg](https://registry.terraform.io/providers/bpg/proxmox/latest/docs)**  
  Cette bibliothèque est légèrement plus complexe à prendre en main, mais elle est bien plus puissante.

<!-- truncate --> 
## Organisation et Structure d'un Projet Terraform 

Afin que vous puissiez mieux comprendre le projet, voici son architecture :

```sh
├── main.tf
├── provider.tf
├── variable.tf
└── terraform.auto.tfvars
```

Vous pouvez ajouter ou segmenter le projet en autant de fichiers `.tf` que nécessaire. Par exemple, nous aurions pu avoir un fichier pour les VMs et un autre pour les LXCs.

- Les fichiers se terminant par `.tfvars` servent à définir des variables. Lorsqu’ils commencent par `auto`, ils sont automatiquement chargés par Terraform.  
- Le fichier `variable.tf` permet de créer des variables sans les instancier.

### Petit point Vocabulaire
Dans cette article, nous allons utiliser le terme de LXC et de VM. Je vais faire un petit point dessus.

- **`LXC`** ou **`LinuX Container`** : ce sont des environnements virtualisés qui tourne sur le `kernel` de l'hôte mais qui ne peuvent pas discuter ensemble. Cela permet de segmenter nos services sans trop perde en performance.

- **`VM`** ou **`Virtual Machine`** : comme son nom l'indique, on simule l'intégralité d'une machine. On perd en performance mais on gagne en sécurité et en fonctionnalité car un LXC n'a pas tout les privilèges.

## Choisir et Configurer un Provider Proxmox

Avant tout, nous devons installer le **provider** (la bibliothèque). Bien entendu, nous fixons une version minimale :  

```hcl
terraform {
  required_providers {
    proxmox = {
      source  = "bpg/proxmox"
      version = ">= 0.3.0"
    }
  }
  required_version = ">= 0.14"
}
```

Une fois la bibliothèque ajoutée, nous déclarons un provider nommé "proxmox", en fournissant les informations nécessaires :  

```hcl
provider "proxmox" {
  endpoint = "https://${var.proxmox_endpoint}:8006"
  api_token = var.api_token_secret

  insecure = true # car un certificat TLS auto-signé est utilisé
  ssh {
    agent = true
    username = terraform
  }
}
```

---

## Les Variables dans Terraform

Si vous êtes attentif, vous avez remarqué que nous utilisons l’objet `var.api_token_secret` dans le bloc du provider. Cette chaîne de caractères est définie dans le fichier `terraform.auto.tfvars`.  

À la manière d’un fichier `.env`, ce fichier contient des valeurs sensibles et **ne doit pas être poussé sur le dépôt git** :  

```hcl
# terraform.auto.tfvars
api_token_secret = "terraform-prov@pve!terraform=TOKEN"
```

Dans le fichier `variable.tf`, nous définissons les variables et leur type.  
Voici les principaux types disponibles :  

- **number**
- **string**
- **list()** (ex. : `list(string)`)
- **object**
- **map**

Exemple :  

```hcl
# variable.tf

variable "api_token_secret" {
  description = "Secret token to connect Proxmox API"
  type        = string
}

variable "proxmox_endpoint" {
  description = "The domain name of the Proxmox instance"
  type        = string
  default     = "proxmox.mysite.fr"
}
```

---

## Les Images et les Templates

Pour démarrer nos entités, nous devons leur fournir un système d’exploitation.  
Nous téléchargeons automatiquement un fichier de template pour le LXC et un ISO avec **cloud-init** pour la VM.  

> Si vous ne connaissez pas **cloud-init**, c’est une méthode permettant d’instancier des machines sans passer par l’installateur de l’OS.  

```hcl
resource "proxmox_virtual_environment_download_file" "ubuntu_22-04_lxc" {
  content_type = "vztmpl"
  datastore_id = "local"
  node_name    = var.target_node
  url          = "http://download.proxmox.com/images/system/ubuntu-22.04-standard_22.04-1_amd64.tar.zst"
}

resource "proxmox_virtual_environment_download_file" "ubuntu_22-04_img" {
  content_type = "iso"
  datastore_id = "local"
  node_name    = var.target_node
  url          = "https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64.img"
}
```

---

## On crée un Réseau Virtuel
Si nous avons envie que nos ressources discutent entre elles, il nous faut un réseau.

Pour créer un adaptateur virtuel, il suffit d’appeler la ressource `proxmox_virtual_environment_network_linux_bridge` et de lui donner un nom :  

```hcl
resource "proxmox_virtual_environment_network_linux_bridge" "internal_network" {
  node_name = var.target_node
  name      = "vmbr5"
  comment   = "Internal Network"
}
```

---

## Votre premier Container  

Passons aux choses concrètes en instanciant un **LXC**. Pour cela, nous créons une ressource `proxmox_virtual_environment_container`.  

Avec l’IaC, tout peut être configuré : le disque, la RAM, le serveur DNS, etc.  

```hcl
resource "proxmox_virtual_environment_container" "first_lxc" {
  description   = "Managed by Terraform - Mr.VyM"
  node_name     = var.target_node
  start_on_boot = true
  started       = true

  vm_id = 101

  cpu {
    architecture = "amd64"
    cores        = var.core_nb
  }

  disk {
    datastore_id = "storage"
    size         = var.disk_size
  }

  memory {
    dedicated = var.memory_size
    swap      = 0
  }

  operating_system {
    template_file_id = proxmox_virtual_environment_download_file.ubuntu_22-04_lxc.id
    type             = "ubuntu"
  }

  initialization {
    hostname = "mycontainer"

    dns {
      servers = ["1.1.1.1", "1.0.0.1"]
    }

    ip_config {
      ipv4 {
        address = "192.168.10.2/24"
        gateway = "192.168.10.1"
      }
    }

    user_account {
      keys     = ["keys 1", "keys 2"]
      password = var.lxc_password
    }
  }

  network_interface {
    bridge = proxmox_virtual_environment_network_linux_bridge.internal_network.name
    name   = "eth0"
  }
}
```

---

## Et maintenant une VM  

Créer une VM suit le même pattern que pour un LXC, avec quelques différences :  

```hcl
resource "proxmox_virtual_environment_vm" "vm_template" {
  description = "Managed by Terraform - Mr.VyM"
  node_name   = var.target_node

  name        = "MyDummyVM"
  vm_id       = 102

  cpu {
    cores = var.core_nb
    type  = "x86-64-v2-AES"  # recommandé pour les CPU modernes
  }

  memory {
    dedicated = var.memory_size
    floating  = var.memory_size # active le ballooning
  }

  disk {
    datastore_id = "local"
    file_id      = proxmox_virtual_environment_download_file.ubuntu_22-04_img.id
    interface    = "scsi0"
    size         = var.disk_size
  }

  initialization {
    ip_config {
      ipv4 {
        address = "${var.base_subnet}.3/24"
        gateway = "${var.base_subnet}.1"
      }
    }

    user_account {
      keys     = ["keys 1", "keys 2"]
      password = var.vm_password 
      username = "mrvym"
    }

    datastore_id = "local"
  }

  network_device {
    bridge = proxmox_virtual_environment_network_linux_bridge.internal_network.name
  }

  operating_system {
    type = "l26" # Linux Kernel
  }
}
```

---

## On check et ca part en Prod

Enfin, nous déployons le tout avec les commandes suivantes :  

- **`terraform init`**  
  Initialise Terraform, télécharge les providers et crée les fichiers `terraform.state` et `terraform.lock`. Ces fichiers stockent l’état des entités sur le serveur.  
  Si ces fichiers sont absents, Terraform recrée les ressources, ce qui pourrait entraîner leur suppression et recréation.  

- **`terraform fmt`**  
  Formate le code pour garantir sa propreté.  

- **`terraform plan`**  
  Vérifie les actions que Terraform s’apprête à exécuter.  

- **`terraform apply`**  
  Applique les modifications.






> Ecrit pour l'**`Avent of Tech`** de la [JECT](https://dev.to/ject)
