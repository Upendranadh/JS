const obj = { fullname: "upendranadh", des: "webdevloper" };

let name = "fullname";
console.log(obj.name, obj.fullname, obj[`${name}`]);

let arr = ["a", "b", "c", "d"];
let obj2 = {};
arr.forEach((el) => {
  obj2[el] = obj2[el] ? obj2[el] + 1 : 1;
});

console.log(obj2);

const object2 = {
  name: "upendranadh",
  age: 24,
  returnAge: function () {
    console.log(`My age is ${this.age}`);
    function functionDeclaration() {
      console.log(`My age is ${this.age}`);
    }
    // functionDeclaration = functionDeclaration.bind(this);
    functionDeclaration();
  },
};

console.log(object2.returnAge());

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

person.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
