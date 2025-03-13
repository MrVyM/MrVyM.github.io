---
draft: true
date: 2029-01-01 
title: Sleep from Python to Electronics
description: sleep
slug: sleep-from-python-to-electronics
tags:
- hardware
- C
- Python
hide_title: false
---
# Sleep from Python to Electronics

## Python
```py
import time
# Here the time is in seconds
time.sleep(2)
```
<!-- truncate --> 
## C
```c
#include <unistd.h>

int main(void) {
  sleep(10);
  return 0;
}
```

## Coreutils
```sh
sleep 2
# or 
sleep inf
```

## ASM
### Syscall SYS_Nanosleep

## STM32

### Blocking 
HAL_Sleep(2)

### No Blocking
while 

## Elec 
Goes bruh

