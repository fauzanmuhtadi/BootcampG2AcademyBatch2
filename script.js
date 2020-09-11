var angkaSoal = [10, 23, 46, 21, 77, 85, 19, 92, 43, 35];
console.log("Array: " + angkaSoal);

// Bilangan prima
let soalSatu = angkaSoal.filter((n) => n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0 && n % 11 !== 0);
console.log("1. " + soalSatu);

// Bilangan yang habis dibagi 3
let soalDua = angkaSoal.filter((n) => n % 3 === 0);
console.log("2. " + soalDua);

// Bilangan yang lebih besar dari 636 jika dikalikan 17
let soalTigaA = angkaSoal.map((n) => n * 17);
let soalTigaB = soalTigaA.filter((n) => n > 636)
let soalTigaC = soalTigaB.map((n) => n / 17)
console.log("3. " + soalTigaC);

// Luas persegi
let soalEmpat = angkaSoal.map((n) => n * n);
console.log("4. " + soalEmpat);

// Volume kubus
let soalLima = angkaSoal.map((n) => n * n * n);
console.log("5. " + soalLima);

// Luas lingkaran
let soalEnam = angkaSoal.map((n) => Math.PI * n * n);
console.log("6. " + soalEnam);
