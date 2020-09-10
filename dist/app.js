class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user = new Human('Ramunas', 88);
console.log(user);
let a = true;
let b = 10;
let c = 'Hello';
let d = `${c} world`;
console.log(d);
let list = ["hello", "world"];
let list2 = [10, 2.5];
console.log(list);
console.log(list2);
let list3 = [1, 2, 3, 4, 5];
console.log(list3);
let cort;
cort = [10, "hello"];
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days["Tuesday"] = "antradienis";
    Days[Days["Wendesday"] = 3] = "Wendesday";
})(Days || (Days = {}));
;
console.log(Days.Tuesday);
let f;
//# sourceMappingURL=app.js.map