class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user: Human = new Human('Ramunas', 88);

console.log(user);

let a: boolean = true;
let b: number = 10;
let c: string = 'Hello';
let d: string = `${c} world`

console.log(d);


let list: string[] = ["hello", "world"];
let list2: number[] = [10, 2.5];

console.log(list);
console.log(list2);

let list3: Array<number> = [1, 2, 3, 4, 5]

console.log(list3);

let cort: [number, string];

cort = [10, "hello"];

enum Days {
    Monday=1,
    Tuesday="antradienis",
    Wendesday=3
};

console.log(Days.Tuesday);

let f: any; //kai nezinoma koks kintamojo tipas

