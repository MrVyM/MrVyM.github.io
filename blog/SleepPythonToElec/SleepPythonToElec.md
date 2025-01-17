---
draft: true
date: 2029-01-01 
---
# Sleep from Python to Electronics

<!-- truncate --> 
## Python
```py
import time
# Here the time is in seconds
time.sleep(2)
```
## C
```c
#include <unistd.h>
int main(void) {
  sleep(10);
  return 1;
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

