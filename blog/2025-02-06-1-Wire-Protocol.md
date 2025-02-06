---
slug: one-wire-protocol 
title: Comment marche le bus 1-Wire ?  
tags:
- bus
- 1-wire
draft: true
authors: mrvym
hide_title: false
---
# Comment marche le bus 1-Wire ?

Dans cet article, nous allons voir comment marche un bus un peu particulier. 
Le 1-Wire, le concept est simple. Un seul fil pour communiquer entre le `Master` et le `Slave`.

## Point Histoire

<!-- truncate --> 
## Allo, il y a quelqu'un ?

> Non, y a personne :wink:

On appelle ce genre de bus, des bus Half-Duplex. 
Un bus half-duplex, cela veut dire que les deux entités peuvent parler sur le bus mais pas en meme temps. 

### Cablage

Pin -> DATA
PIN -> VCC (car alimentation)
GND -> GND

## Au debut du commencement

- SOF
- Reponse SOF

## Master to Slave

- Envoi 0
- Envoi 1

### POV Slave

## Slave to Master 


- Envoi 0
- Envoi 1

### POV Slave 
 

## 1-Wire with UART 

TODO

## Conclusion
- Limitation Technique
- Interet 




