
// cara 1 : tipe[]

let num: number[] = [1,2,3,4,5,6,7,8];
let names: string[] = ["gaminads","asdfasd","adfadsf"];

//cara 2 : array[]

let scores: Array<number> = [1,2,3,4,5];
let fruits: Array<string> = ["banana", "apple", "orange"];

// array dengan mulitple types(uninon type)
// hanya bisa menyimpan nilai dengan tipe data string dan number
let mixed: (string | number)[] = [1,"one", 2, "two",];

// array methods
num.push(6) // menambah element
names.pop()// menghapus element terahkir

//iterasi array
num.forEach(num =>{
    console.log("Number : ", num);
})

//array mapping

const doubledNum = num.map(num => num * 2);

console.log("doubled numbers : ", doubledNum)