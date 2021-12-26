"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
const lynn = new Human("lynn", 22, "female");
const sayHi = (person) => {
    console.log(person.name, person.getAge(), person.gender);
    return person.name + person.getAge() + person.gender;
};
lynn.setAge(88);
console.log("1=============================================================================");
console.log(sayHi(lynn));
//# sourceMappingURL=practice.js.map