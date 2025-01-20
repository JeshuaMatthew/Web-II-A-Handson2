// Object type annotation

let user: {name: string; age: number; email: string} = {
    name: "Matthew",
    age: 21,
    email: "veryrealperson@gmail.com",
}

// Interface untuk object

interface Employee{
    id:number;
    name: string;
    departement: string;
    readonly salary: number; // nilainya gk bisa di ganti
    contact?: string; //optional
}

let employee: Employee = {
    id : 1,
    name : "John Doe",
    departement : "IT",
    salary : 50,
    contact: "gaming@gaming.net",
}

//nested object

interface Company {
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
    employees : Employee[];
}

let company: Company = {
    name: "Tech Corp",
    address: {
        street:"123 Main St",
        city: "Tech City",
        country: "Techland",
    },
    employees:[employee],
}

console.log("Company Name : ",company.name);
console.log("Company Address : ",company.address);
console.log("Company Employee : ",company.employees);
