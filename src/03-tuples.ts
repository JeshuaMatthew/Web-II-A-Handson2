//valuenya harus sesuai dengan urutan tipe datanya
let person: [string, number, boolean] = ["John", 10, true];
let coordinate: [number, number] = [10,10];

//numbernya optional bisa di tambahin bisa nggak
let optionalTuple : [string, number?] = ["heloo"];


//destructuring tuple
 let [name, age, isEmployed] = person;
 console.log("name :",name);
 console.log("age :",age);
 console.log("isEmployed :",isEmployed);

 let employees: [string, number][] = [
    ["John", 30],
    ["Jane", 25],
    ["Bob", 35],
 ]

 employees.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
 });

export {};