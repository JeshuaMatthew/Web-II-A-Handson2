function add(a:number, b:number):number{
    return a + b;
}

console.log("hasil : ",add(5,10));

// Arrow Function dengan tipe

const multiply = (x: number, y: number): number => x * y;


// alt version, kalo pake kurung kurawal hrs pake returnl
// const multiply = (x: number, y: number): number =>{ 
//     return x * y
// };

// Function dengna optional parameter
function greet(name: string, greeting?: string):string{
    if(greeting){
        return `${greeting}, ${name}`;
    }

    return `Hello, ${name}`;
}

// Function dengan default parameter
function createEmail(to:string, subject: string = "No Subject"): string{
    return `Email to : ${to}, Subject: ${subject}`;
}

function sum(...nums: number[]): number{
    return nums.reduce((total, num) => total + num, 0);
}

//functions overloads
function processInput (input: number):number;
function processInput (input: string):string;

function processInput (input: number | string):number | string{
    if(typeof input === "number"){
        return input * 2;
    }
    return input.toUpperCase();
}



console.log(greet("John"));

console.log(greet("Jesus", "hola !!"))

console.log(createEmail("Matthew"));
console.log(createEmail("Matthew","pliss hire meee :(((("));

console.log(sum(1,2,4,5,6,7));
