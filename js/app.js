//? if else

//! 1-misol \\\

// let num = +prompt('Son kiriting ...')
// let res;

// if (num > 0) {
//     res = num + 1
// } else{
//     res = num
// }

// console.log(res)

//! 2-misol \\\

// let num = +prompt('Son kiriting ...')
// let res;

// if (num > 0) {
//     res = num + 1
// } else{
//     res = num - 2
// }

// console.log(res)

//! 3-misol \\\

// let num = +prompt('Son kiriting ...')
// let res;

// if (num > 0) {
//     res = num + 1
// }
// else if (num == 0) {
//     res = num = 10
// }
// else{
//     res = num - 2
// }

// console.log(res)

//! 4-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')
// let num3 = +prompt('3-Sonni kiriting ...')
// let res = 0;

// if (num1 > 0) {
//     res++;
// }
// if (num2 > 0) {
//     res++;
// }
// if (num3 > 0) {
//     res++;
// }

// console.log("Musbat sonlar soni: " + res);

//! 5-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')
// let num3 = +prompt('3-Sonni kiriting ...')
// let res = 0;

// if (num1 < 0) {
//     res++;
// }
// if (num2 < 0) {
//     res++;
// }
// if (num3 < 0) {
//     res++;
// }

// console.log("Manfiy sonlar soni: " + res);

//! 6-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')
// let res;

// if (num1 > num2) {
//     res = num1
// } else {
//     res = num2
// }

// console.log('Kiritilgan sonlarning Kattasi', res)

//! 7-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')
// let res;

// if (num1 < num2) {
//     res = num1
// } else {
//     res = num2
// }

// console.log(`Kiritilgan sonlarning kichiginig trtib raqami ${res}`, res)

//! 8-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')

// if (num1 > num2) {
//     console.log('Kattasi',num1, 'Kichigi', num2)
// } else {
//     console.log('Kattasi',num2, 'Kichigi', num1)
// }

//! 9-misol \\\

// let a = +prompt("Birinchi sonni kiriting (a):");
// let b = +prompt("Ikkinchi sonni kiriting (b):");

// if (a < b) {
//     console.log("a (" + a + ") kichik b (" + b + ") dan.");
// } else if (a > b) {
//     console.log("a (" + a + ") katta b (" + b + ") dan.");
// } else {
//     console.log("a (" + a + ") va b (" + b + ") teng.");
// }

//! 10-misol \\\

// let a = +prompt("Birinchi sonni kiriting (a):");
// let b = +prompt("Ikkinchi sonni kiriting (b):");

// if (a < b) {
//     console.log("a (" + a + ") kichik b (" + b + ") dan.");
// } else if (a > b) {
//     console.log("a (" + a + ") katta b (" + b + ") dan.");
// } else {
//     console.log(a + b);
// }

//! 11-misol \\\

// let num1 = +prompt('1-Sonni kiriting ...')
// let num2 = +prompt('2-Sonni kiriting ...')
// let res;

// if (num1 > num2) {
//     res = num1
// } else if (num1 == num2) {
//     res = 0
// }
// else {
//     res = num2
// }

// console.log(`Katta son`, res)

//! 12-misol \\\

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let res;

// if (num1 <= num2 && num1 <= num3) {
//     res = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//     res = num2;
// } else {
//     res = num3;
// }

// console.log("Eng kichik son: " + res);

//! 13-misol \\\

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let res;

// if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
//     res = num1;
// } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
//     res = num2;
// } else {
//     res = num3;
// }

// console.log("Sonlar orasidagi o'rtacha son: " + res);

//! 14-misol \\\

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let res;

// if (num1 >= num2 && num1 >= num3) {
//     res = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     res = num2;
// } else {
//     res = num3;
// }

// let res2;
// if (num1 <= num2 && num1 <= num3) {
//     res2 = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//     res2 = num2;
// } else {
//     res2 = num3;
// }

// console.log("Eng kichik son: " + res2, 'va', 'Eng kattasi:  ' + res);

//! 15-misol \\\

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let sum1 = num1 + num2;
// let sum2 = num1 + num3;
// let sum3 = num2 + num3;

// let res;

// if (sum1 >= sum2 && sum1 >= sum3) {
//     res = sum1;
// } else if (sum2 >= sum1 && sum2 >= sum3) {
//     res = sum2;
// } else {
//     res = sum3;
// }

// console.log("Eng katta yig'indi: " + res);

//? Boolean

//! 1-misol \\\

// let a = +prompt("Son kiriting ...")
// let res;

// if (a > 0) {
//     res = true
// } else {
//     res = false
// }
// console.log(res);

//! 2-misol \\\

// let a = +prompt("Son kiriting ...")
// let res;

// if (a % 2 == 0) {
//     res = false
// } else {
//     res = true
// }
// console.log(res);

//! 3-misol \\\

// let a = +prompt("Son kiriting ...")
// let res;

// if (a % 2 == 0) {
//     res = true
// } else {
//     res = false
// }
// console.log(res);

//! 4-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");

// if (a > 2 && b <= 3) {
//     console.log("a > 2 va b <= 3 shartlari bajarildi.");
// } else {
//     console.log("Shartlar bajarilmadi.");
// }

//! 5-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");

// if (a >= 0 && b <- 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 6-misol \\\
// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");
// let c = +prompt("Son kiriting (c):");

// if (a <= b <=c) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 7-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");
// let c = +prompt("Son kiriting (c):");

// if (a <= b <= c || a >= b <= c) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 8-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");

// if (a % 2 == 0 && b % 2 == 0) {
//     console.log(false);
// } else {
//     console.log(true);
// }

//! 9-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");

// if (a % 2 == 0 && b % 2 == 0 || a % 2 == 0 && b % 2 == 0) {
//     console.log(false);
// } else {
//     console.log(true);
// }


//! 10-misol \\\

// let a = +prompt("Son kiriting (a):");
// let b = +prompt("Son kiriting (b):");

// if (a % 2 == 0 && b % 2 == 0 ||a % 2 !== 0 && b % 2 !== 0) {
//     console.log(false);
// } else {
//     console.log(true);
// }