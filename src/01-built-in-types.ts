// dekalrasi dengan tipe data explicit

let age: number = 21;
let name: string = "matthew";
let isActive: boolean = true;
let notFound: null = null;
let notDefined: undefined = undefined;
let anything: any = "bebas mamang";
anything = 69;

// dekalrasi dengan type inference

let gaji = 50000000;
let pesan = "Hello World";

// tipe data void
function logMessage(): void{
    console.log("ini di panggil dari fungsi yg tidak mengembalikan nilai !!!");

}

logMessage();
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Active:", isActive);

export {};