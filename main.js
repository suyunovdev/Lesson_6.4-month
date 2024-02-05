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
  
//   // Misol:
//   let myArray = [1, 2, 3, 4, 5];
//   array(myArray);
  

//4-masala/////////////
// function printUniqueNumbers(arr) {
//     if (!Array.isArray(arr)) {
//       console.error("Input is not an array");
//       return;
//     }
  
//     let uniqueNumbers = [...new Set(arr)]; 
//     uniqueNumbers.sort((a, b) => a - b); 
  
//     console.log("Toqlar tartibida chiqarilgan sonlar: ", uniqueNumbers);
//     console.log("Toqlar sonining soni: ", uniqueNumbers.length);
//   }

//   let myArray = [4,9,7,8,6,5];
//   printUniqueNumbers(myArray);

//5-masala///////////

  
  