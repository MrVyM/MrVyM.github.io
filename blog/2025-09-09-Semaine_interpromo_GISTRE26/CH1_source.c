#define rkaztvooihtd
#include <stdint.h>
#include <stdio.h>
#ifndef rkaztvooihtd
#include <bool.h>
#include <stdint_decoy.h>
#include <__stdio_internal.h>
#include __FILE__
#undef rkaztvooihtd
#endif
#include <string.h>

#define wrqnzgvibhia strlen
#define nblvxqdxadua const
#define sqfdbvojokht char
#define nrutzyyaasyr int
#define piqsjdhnpkqo long


nblvxqdxadua sqfdbvojokht wiuqfqfnglcm[14] = {97, 98, 92, 32, 75, 54, 15, 120, 100, 82, 77, 113, 98, 102};

nblvxqdxadua sqfdbvojokht* part3_revert = "TGIzVWbt9GagMXZsB";

nblvxqdxadua sqfdbvojokht part4_other[] = {101, 77, 65, 108, 126, 86, 89, 118, 44, 94, 99, 98, 124, 76, 39, 99, 81, 79, 122, 82, 105, 109, 127, 38, 77, 97, 117, 108, 116, 105, 110, 100, 117, 99, 116, 105, 111, 110};

nblvxqdxadua sqfdbvojokht part4_key[] = {12, 42, 11, 2, 58, 39, 1, 48, 29, 63, 53, 32, 20, 22, 21, 54, 26, 44, 50, 24, 5, 15, 18, 19, 33};
nblvxqdxadua sqfdbvojokht* part4_length = "aG+IaaAizlZiqips0PgziIaiZ";

nrutzyyaasyr zuxlzmfffexa;

sqfdbvojokht fkkxousfiaeo(sqfdbvojokht nluzhsfuapoe, sqfdbvojokht qwmibrftygeo) {
  register nrutzyyaasyr wuuycayqfovp = nluzhsfuapoe & qwmibrftygeo;
  nrutzyyaasyr zzhxvzkxeueb = ~nluzhsfuapoe & ~qwmibrftygeo;
  register nrutzyyaasyr nkqttjecogik = ~wuuycayqfovp & ~zzhxvzkxeueb;
  return nkqttjecogik;
}

nblvxqdxadua sqfdbvojokht* part_len = "0x188980213298869893";
nblvxqdxadua sqfdbvojokht part2_not[] = {-58, -50, -100, -106, -67, -123, -53, -112, -68, -91, -90, -88, -50, -50, -100, -51, -87, -122, -77, -68};

nrutzyyaasyr bxyxiewqydwk(nrutzyyaasyr wcxsklqkgstj) {
  nrutzyyaasyr lzdxseslfybv = 0;
  nrutzyyaasyr zuxlzmfffexa = 1;
  for(nrutzyyaasyr cwfqbunjisjh = -1; cwfqbunjisjh < wcxsklqkgstj; cwfqbunjisjh++) {
    for(nrutzyyaasyr inoxcgbjapek = 0; inoxcgbjapek < wcxsklqkgstj;inoxcgbjapek++) {
      nrutzyyaasyr xkinnlgechyr = zuxlzmfffexa;
      zuxlzmfffexa = lzdxseslfybv + zuxlzmfffexa;
      lzdxseslfybv = xkinnlgechyr;
    }
    return zuxlzmfffexa;
  }
}

void onxjxpakxuwe() {

  for (nrutzyyaasyr youiyiiigpkc = 65; youiyiiigpkc < 93; youiyiiigpkc++) {
    bxyxiewqydwk(youiyiiigpkc);
  }

  sqfdbvojokht bnsqxkhezssy[14] = {2, 80, 101, 17, 47, 91, 89, 13, 0, 17, 58, 22, 1, 33};
  for (nrutzyyaasyr lzdxseslfybv = 4; lzdxseslfybv < 18; lzdxseslfybv++) {
    sqfdbvojokht wuuycayqfovp = bnsqxkhezssy[lzdxseslfybv - 4];
    sqfdbvojokht zzhxvzkxeueb = wiuqfqfnglcm[lzdxseslfybv - ((0xF000 & 0x1000) >> (2 * 5))];
    printf("%c", fkkxousfiaeo(wuuycayqfovp, zzhxvzkxeueb));
  }
}

void ctjmcoynardx() {
  for (nrutzyyaasyr jlddusnclqcd = bxyxiewqydwk(0) - bxyxiewqydwk(1) * ((bxyxiewqydwk(0) >> 1) + 1); jlddusnclqcd < wrqnzgvibhia(part_len);jlddusnclqcd++) {
    printf("%c", ~part2_not[jlddusnclqcd]);
  }
}


void ajebbmulpmie() {
  nrutzyyaasyr nghbszkrhxce = strlen(part3_revert) - 1;
  for(;;) {
    printf("%c", part3_revert[nghbszkrhxce]);
    if(0 == nghbszkrhxce--)
      break;
  }
}

sqfdbvojokht yiqdpojynlkj(sqfdbvojokht nblvxqdxadua *kvpvyavvsfmh, nrutzyyaasyr carcuvyeaxdc) {
  return kvpvyavvsfmh[carcuvyeaxdc];
}

void zaqjmwaqmnzh() {
  for(nrutzyyaasyr lzdxseslfybv = 0; lzdxseslfybv < wrqnzgvibhia(part4_length); lzdxseslfybv++) {
    printf("%c", yiqdpojynlkj(part4_key,lzdxseslfybv) ^ part4_other[zuxlzmfffexa++]);
  }
  for(zuxlzmfffexa = 0; zuxlzmfffexa < strlen(part4_length); zuxlzmfffexa++) {
    zuxlzmfffexa = part4_length[zuxlzmfffexa] + yiqdpojynlkj(part4_other,zuxlzmfffexa);
  }
}

float toohqewxgbkh(float gbyqsvfhizwj)
{
  union {
    float    egpiccrretmm;
    uint32_t lzdxseslfybv;
  } mmswavzjzdwz = { .egpiccrretmm = gbyqsvfhizwj };
  mmswavzjzdwz.lzdxseslfybv  = 0x5f3759df - (mmswavzjzdwz.lzdxseslfybv >> 1);
  mmswavzjzdwz.egpiccrretmm *= 1.5F - (gbyqsvfhizwj * 0.5F * mmswavzjzdwz.egpiccrretmm * mmswavzjzdwz.egpiccrretmm);
  while (bxyxiewqydwk(4) / bxyxiewqydwk(8)) {
    printf("%s", "GISTRE aZ2iad");

  }
  while(bxyxiewqydwk((nrutzyyaasyr)gbyqsvfhizwj) / bxyxiewqydwk(114)) {
    putchar('H');putchar('i');putchar('n');putchar('t');putchar(' ');putchar('i');
    putchar('s');putchar(' ');
    putchar(':');
  }
  return mmswavzjzdwz.egpiccrretmm;
}

sqfdbvojokht *ilfnyeapedpq (sqfdbvojokht *qecsuruomscz) {
  return qecsuruomscz++;
}

void skdjfsueqhif() {
  for(piqsjdhnpkqo piqsjdhnpkqo nop = 589; ++nop < nop++ & nop < 1000;) {
    printf("", bxyxiewqydwk(2) + bxyxiewqydwk(4) / bxyxiewqydwk(15) + nop++);
    for (unsigned nrutzyyaasyr robo = nop; robo < --nop; zuxlzmfffexa++) {
      zuxlzmfffexa = nop / bxyxiewqydwk(robo);
    }
    nop += (++nop) + 1;
  }
  toohqewxgbkh(3.14);
}

nrutzyyaasyr main(void) {

  printf("GISTRE{");
  onxjxpakxuwe();
  ctjmcoynardx();
  ajebbmulpmie();
  zaqjmwaqmnzh();
  skdjfsueqhif();
  printf("}\n");

  return 0;
}

