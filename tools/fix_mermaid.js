const fs = require('fs');
let c = fs.readFileSync('Lection3.html', 'utf8');
const n = s => s.replace(/\r\n/g, '\n');
let cn = n(c);

// ============================================================
// ТОРГОВА — додати <br> та (X)/(Y) 
// ============================================================
cn = cn.replace(
  n(`    OLT(("OLT +2 дБ")):::olt ---|Волокно 1| FBTMAIN{"FBT 30/70"}:::fbt
    FBTMAIN ---|30: -3,39| FOB1[FOB 1]
    FBTMAIN ---|70: +0,44| VOL2(("На вул. Перемоги")):::tran
    
    subgraph sg1 ["Оптична Шина - вул. Торгова"]
        direction LR
        FOB1 --- FBT1{"FBT 50/50"}:::fbt
        FBT1 ---|Y: -6,58| FOB2[FOB 2]
        FOB2 --- PLC2["PLC 1x8"]:::plc --- ONU2[8 ONU]:::onu
        
        FBT1 ---|X: -6,56| PLC1["PLC 1x8"]:::plc --- ONU1[8 ONU]:::onu
    end`),
  n(`    OLT(("OLT<br>+2 дБ")):::olt ---|Волокно 1| FBTMAIN{"FBT<br>30(X)/70(Y)"}:::fbt
    FBTMAIN ---|30: -3,39| FOB1[FOB 1]
    FBTMAIN ---|70: +0,44| VOL2(("На вул.<br>Перемоги")):::tran
    
    subgraph sg1 ["Оптична Шина - вул. Торгова"]
        direction LR
        FOB1 --- FBT1{"FBT<br>50(X)/50(Y)"}:::fbt
        FBT1 ---|Y: -6,58| FOB2[FOB 2]
        FOB2 --- PLC2["PLC<br>1x8"]:::plc --- ONU2[8 ONU]:::onu
        
        FBT1 ---|X: -6,56| PLC1["PLC<br>1x8"]:::plc --- ONU1[8 ONU]:::onu
    end`)
);
console.log('Torgova done');

// ============================================================
// ПЕРЕМОГИ — додати <br> та (X)/(Y)
// ============================================================
cn = cn.replace(
  n(`    IN(("Вхід +0,44")):::tran --- FOB3[FOB 3]
    subgraph Вулиця Перемоги [Оптична Шина - вул. Перемоги]
        direction LR
        FOB3 --- FBT3{"FBT 20/80"}:::fbt
        FBT3 ---|Y: -0,62| FOB4[FOB 4] --- FBT4{"FBT 20/80"}:::fbt
        FBT4 ---|Y: -1,68| FOB5[FOB 5] --- FBT5{"FBT 20/80"}:::fbt
        FBT5 ---|Y: -2,74| FOB6[FOB 6] --- FBT6{"FBT 20/80"}:::fbt
        FBT6 ---|Y: -3,80| FOB7[FOB 7] --- FBT7{"FBT 20/80"}:::fbt
        FBT7 ---|Y: -4,86| OUT((Резерв)):::tran
        
        FBT3 ---|X: -6,67| PLC3["PLC 1x8"]:::plc --- ONU3[8 ONU]:::onu
        FBT4 ---|X: -7,73| PLC4["PLC 1x8"]:::plc --- ONU4[8 ONU]:::onu
        FBT5 ---|X: -8,79| PLC5["PLC 1x8"]:::plc --- ONU5[8 ONU]:::onu
        FBT6 ---|X: -9,85| PLC6["PLC 1x8"]:::plc --- ONU6[8 ONU]:::onu
        FBT7 ---|X: -10,91| PLC7["PLC 1x4"]:::plc --- ONU7[4 ONU]:::onu
    end`),
  n(`    IN(("Вхід<br>+0,44")):::tran --- FOB3[FOB 3]
    subgraph Вулиця Перемоги [Оптична Шина - вул. Перемоги]
        direction LR
        FOB3 --- FBT3{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT3 ---|Y: -0,62| FOB4[FOB 4] --- FBT4{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT4 ---|Y: -1,68| FOB5[FOB 5] --- FBT5{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT5 ---|Y: -2,74| FOB6[FOB 6] --- FBT6{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT6 ---|Y: -3,80| FOB7[FOB 7] --- FBT7{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT7 ---|Y: -4,86| OUT((Резерв)):::tran
        
        FBT3 ---|X: -6,67| PLC3["PLC<br>1x8"]:::plc --- ONU3[8 ONU]:::onu
        FBT4 ---|X: -7,73| PLC4["PLC<br>1x8"]:::plc --- ONU4[8 ONU]:::onu
        FBT5 ---|X: -8,79| PLC5["PLC<br>1x8"]:::plc --- ONU5[8 ONU]:::onu
        FBT6 ---|X: -9,85| PLC6["PLC<br>1x8"]:::plc --- ONU6[8 ONU]:::onu
        FBT7 ---|X: -10,91| PLC7["PLC<br>1x4"]:::plc --- ONU7[4 ONU]:::onu
    end`)
);
console.log('Peremohy done');

// ============================================================
// РАЙДУЖНА — додати <br> та (X)/(Y)
// ============================================================
cn = cn.replace(
  n(`    OLT2(("OLT +2 дБ")):::olt ---|Волокна 3/4| FBTM{"FBT 50/50"}:::fbt
    FBTM ---|X: -1,17| FOB8[FOB 8]
    FBTM ---|Y: -1,19| VOL4(("На пров. Матросова")):::tran
    
    subgraph sg3 ["Оптична Шина - вул. Райдужна"]
        direction LR
        FOB8 --- FBT8{"FBT 20/80"}:::fbt
        FBT8 ---|Y: -2,23| FOB9[FOB 9] --- FBT9{"FBT 20/80"}:::fbt
        FBT9 ---|Y: -3,29| FOB10[FOB 10] --- FBT10{"FBT 20/80"}:::fbt
        FBT10 ---|Y: -4,35| FOB11[FOB 11] --- FBT11{"FBT 20/80"}:::fbt
        FBT11 ---|Y: -5,41| FOB12[FOB 12] --- PLC12["PLC 1x8"]:::plc --- ONU12[8 ONU]:::onu
        
        FBT8 ---|X: -8,28| PLC8["PLC 1x8"]:::plc --- ONU8[8 ONU]:::onu
        FBT9 ---|X: -9,34| PLC9["PLC 1x8"]:::plc --- ONU9[8 ONU]:::onu
        FBT10 ---|X: -10,40| PLC10["PLC 1x8"]:::plc --- ONU10[8 ONU]:::onu
        FBT11 ---|X: -11,46| PLC11["PLC 1x8"]:::plc --- ONU11[8 ONU]:::onu
    end`),
  n(`    OLT2(("OLT<br>+2 дБ")):::olt ---|Волокна 3/4| FBTM{"FBT<br>50(X)/50(Y)"}:::fbt
    FBTM ---|X: -1,17| FOB8[FOB 8]
    FBTM ---|Y: -1,19| VOL4(("На пров.<br>Матросова")):::tran
    
    subgraph sg3 ["Оптична Шина - вул. Райдужна"]
        direction LR
        FOB8 --- FBT8{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT8 ---|Y: -2,23| FOB9[FOB 9] --- FBT9{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT9 ---|Y: -3,29| FOB10[FOB 10] --- FBT10{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT10 ---|Y: -4,35| FOB11[FOB 11] --- FBT11{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT11 ---|Y: -5,41| FOB12[FOB 12] --- PLC12["PLC<br>1x8"]:::plc --- ONU12[8 ONU]:::onu
        
        FBT8 ---|X: -8,28| PLC8["PLC<br>1x8"]:::plc --- ONU8[8 ONU]:::onu
        FBT9 ---|X: -9,34| PLC9["PLC<br>1x8"]:::plc --- ONU9[8 ONU]:::onu
        FBT10 ---|X: -10,40| PLC10["PLC<br>1x8"]:::plc --- ONU10[8 ONU]:::onu
        FBT11 ---|X: -11,46| PLC11["PLC<br>1x8"]:::plc --- ONU11[8 ONU]:::onu
    end`)
);
console.log('Raiduzna done');

// ============================================================
// МАТРОСОВА — додати <br> та (X)/(Y) 
// ============================================================
cn = cn.replace(
  n(`    IN2(("Вхід -1,19")):::tran --- FOB13[FOB 13]
    subgraph Провулок Матросова [Оптична Шина - пров. Матросова]
        direction LR
        FOB13 --- FBT13{"FBT 20/80"}:::fbt
        FBT13 ---|Y: -2,25| FOB14[FOB 14] --- FBT14{"FBT 20/80"}:::fbt
        FBT14 ---|Y: -3,31| FOB15[FOB 15] --- FBT15{"FBT 20/80"}:::fbt
        FBT15 ---|Y: -4,37| FOB16[FOB 16] --- FBT16{"FBT 20/80"}:::fbt
        FBT16 ---|Y: -5,43| FOB17[FOB 17] --- PLC17["PLC 1x8"]:::plc --- ONU17[8 ONU]:::onu
        
        FBT13 ---|X: -8,30| PLC13["PLC 1x8"]:::plc --- ONU13[8 ONU]:::onu
        FBT14 ---|X: -9,36| PLC14["PLC 1x8"]:::plc --- ONU14[8 ONU]:::onu
        FBT15 ---|X: -10,42| PLC15["PLC 1x8"]:::plc --- ONU15[8 ONU]:::onu
        FBT16 ---|X: -11,48| PLC16["PLC 1x8"]:::plc --- ONU16[8 ONU]:::onu
    end`),
  n(`    IN2(("Вхід<br>-1,19")):::tran --- FOB13[FOB 13]
    subgraph Провулок Матросова [Оптична Шина - пров. Матросова]
        direction LR
        FOB13 --- FBT13{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT13 ---|Y: -2,25| FOB14[FOB 14] --- FBT14{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT14 ---|Y: -3,31| FOB15[FOB 15] --- FBT15{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT15 ---|Y: -4,37| FOB16[FOB 16] --- FBT16{"FBT<br>20(X)/80(Y)"}:::fbt
        FBT16 ---|Y: -5,43| FOB17[FOB 17] --- PLC17["PLC<br>1x8"]:::plc --- ONU17[8 ONU]:::onu
        
        FBT13 ---|X: -8,30| PLC13["PLC<br>1x8"]:::plc --- ONU13[8 ONU]:::onu
        FBT14 ---|X: -9,36| PLC14["PLC<br>1x8"]:::plc --- ONU14[8 ONU]:::onu
        FBT15 ---|X: -10,42| PLC15["PLC<br>1x8"]:::plc --- ONU15[8 ONU]:::onu
        FBT16 ---|X: -11,48| PLC16["PLC<br>1x8"]:::plc --- ONU16[8 ONU]:::onu
    end`)
);
console.log('Matrosova done');

fs.writeFileSync('Lection3.html', cn, 'utf8');
console.log('All schemas updated!');
