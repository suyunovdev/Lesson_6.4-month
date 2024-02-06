//////uyga vazifaaaa ///////////////
//1-masala///////////
// function getLevel2(n) {
//     let natija = [];
//     for (let i = 1; i <= n; i++) {
//       natija.push(Math.pow(2, i));
//     }
//     return natija;
//   }
//   let n = 5;
//   let result = getLevel2(n);
//   console.log(result);

//2-masala/////////
// function generateArray(n, a, b) {
  
//     let arr = [a, b];
  
//     for (let i = 2; i < n; i++) {
//       let sum = arr.reduce((acc, val) => acc + val, 0);
//       arr.unshift(sum);
//     }
  
//     return arr;
//   }
  
//   let n = 5;
//   let a = 2;
//   let b = 3;
  
//   let result = generateArray(n, a, b);
//   console.log(result);
  

//3-masala///////////
// function array(arr) {
//     if (!Array.isArray(arr)) {
//       console.error("Input is not an array");
//       return;
//     }
  
//     let revers = arr.reverse();
//     console.log(revers);
//   }
  
//   let myArray = [1, 2, 3, 4, 5];
//   array(myArray);
  

//4-masala/////////////
// function numbers(arr) {
  
//     let sum = [...new Set(arr)]; 
//     sum.sort((a, b) => a - b); 
  
//     console.log("Toqlar tartibida chiqarilgan sonlar: ", sum);
//     console.log("Toqlar sonining soni: ", sum.length);
//   }

//   let myArray = [4,9,7,8,6,5];
//   numbers(myArray);

//5-masala///////////
// function sum(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }
//     return result;
// }
// let array = [4,5,7,8,6,9];
// let natija = sum(array);
// console.log(natija); 


//6-masala
// function toq_indexli_elementlar(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//         result.push(arr[i]);
//         i += 2;
//     }
//     return result;
// }
// let array = [1, 3, 5, 7, 9];
// let natija = toq_indexli_elementlar(array);
// console.log(natija); 

//7-masala

// function juft_va_toq_indexli_elementlar(arr) {
//     let juftIndexli = [];
//     let toqIndexli = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             juftIndexli.push(arr[i]);
//         } else {
//             toqIndexli.push(arr[i]);
//         }
//     }
//     console.log("Juft indexli elementlar:", juftIndexli);
//     console.log("Toq indexli elementlar:", toqIndexli);
// }
// let array = [1, 2, 3, 4, 5, 6];
// juft_va_toq_indexli_elementlar(array);

//8-masala

// function toq_va_juft_indexli_elementlar(arr) {
//     let toqIndexli = [];
//     let juftIndexli = [];
    
//     for (let i = 1; i < arr.length; i += 2) {
//         toqIndexli.push(arr[i]);
//     }

//     for (let i = 0; i < arr.length; i += 2) {
//         juftIndexli.push(arr[i]);
//     }

//     console.log("Toq indexli elementlar:", toqIndexli);
//     console.log("Juft indexli elementlar:", juftIndexli);
// }
// let array = [1, 2, 3, 4, 5, 6];
// toq_va_juft_indexli_elementlar(array);


//9-masla
// function arrays(arr) {
//     let truthy = [];
//     let falsy = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             truthy.push(arr[i]);
//         } else {
//             falsy.push(arr[i]);
//         }
//     }
    
//     return [truthy, falsy];
// }
// let array = [10, false, "", "Ilyos", null];
// let [truthyArray, falsyArray] = arrays(array);
// console.log("Truthy qiymatlar:", truthyArray);
// console.log("Falsy qiymatlar:", falsyArray);

//10-masala

// function getOddMin(arr) {
//     let min = Infinity; 
//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// let arr = [3, 7, 2, 8, 5, 9, 1, 4, 6];
// let minOdd = getOddMin(arr);
// console.log("Juft indeksli elementlar orasidagi eng kichik qiymat:", minOdd);

//11-masala

// function getEvenMax(arr) {
//     let max = -Infinity; // Eng kichik qiymat
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let arr = [3, 7, 2, 8, 5, 9, 1, 4, 6];
// let maxEven = getEvenMax(arr);
// console.log("Toq indeksli elementlar orasidagi eng katta qiymat:", maxEven);

//12-masala
// function engYaqin(arr, r) {
//     let engYaqinSon = arr[0]; 
//     let engYaqinMasofa = Math.abs(arr[0] - r); 
 
//     for (let i = 1; i < arr.length; i++) {
//         let masofa = Math.abs(arr[i] - r); 
//         if (masofa < engYaqinMasofa) {
//             engYaqinSon = arr[i]; 
//             engYaqinMasofa = masofa; 
//         }
//     }
//     return engYaqinSon;
// }

// // Misol:
// let array = [2, 5, 9, 13, 17, 21];
// let r = 10;
// let natija = engYaqin(array, r);
// console.log("Berilgan son", r, "ga eng yaqin son:", natija);

//13-masala

// function birXilQiymatIndeks(arr) {
//     let indekslar = [];
//     let elementlar = {}; 
    
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (elementlar[element] !== undefined) { 
//             indekslar.push(elementlar[element], i); 
//         } else {
//             elementlar[element] = i; 
//         }
//     }
//     return indekslar;
// }
// let array = [1, 5, 3, 2, 5, 7, 9, 2];
// let indekslar = birXilQiymatIndeks(array);
// console.log("Bir xil qiymatli elementlar indekslari:", indekslar);


//14-masala
// function ikkiTaEngKattaQoshno(arr) {
//     let max1 = -Infinity; // Birinchi eng katta qiymat
//     let max2 = -Infinity; // Ikkinchi eng katta qiymat
    
//     // Birinchi eng katta qiymatni topish
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) {
//             max2 = max1; // Birinchi eng katta qiymat ikkinchi eng katta qiymatga o'zgartiramiz
//             max1 = arr[i]; // Yangi birinchi eng katta qiymatni o'zgartiramiz
//         } else if (arr[i] > max2 && arr[i] !== max1) {
//             max2 = arr[i]; // Yangi ikkinchi eng katta qiymatni o'zgartiramiz
//         }
//     }
    
//     return [max1, max2];
// }

// // Misol:
// let array = [1, 5, 9, 2, 8, 7, 3];
// let [max1, max2] = ikkiTaEngKattaQoshno(array);
// console.log("Eng katta 2 ta qo'shno element:", max1, max2);

//15-masala

// function engKopQatnashganQiymat(arr) {
//     let elementlar = {}; 
//     let engKopQatnashganQiymat = null; 
//     let qatnashganSoni = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (elementlar[element] === undefined) {
//             elementlar[element] = 1; 
//         } else {
//             elementlar[element]++; 
//             if (elementlar[element] > qatnashganSoni) {
//                 qatnashganSoni = elementlar[element];
//                 engKopQatnashganQiymat = element; 
//             }
//         }
//     }
    
//     return [engKopQatnashganQiymat, qatnashganSoni];
// }

// let array = [3, 5, 2, 5, 7, 3, 8, 5, 5];
// let [engKopQiymat, qatnashganSoni] = engKopQatnashganQiymat(array);
// console.log("Eng ko'p qatnashgan qiymat:", engKopQiymat);
// console.log("Uning soni:", qatnashganSoni);


//16-masala
// function orttirish(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += k;
//     }
//     return arr;
// }
// let array = [2, 4, 6, 8, 10];
// let k = 3;
// let yangiArray = orttirish(array, k);
// console.log("Yangi array:", yangiArray);


