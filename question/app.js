// Q1
let nickname = "ゆう";
let age = 31;

console.log("私のニックネームは"+ nickname +"です。年齢は"+ age +"歳です。");

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python","Go"];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card"
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"]
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"]
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."]
  }
];

console.log(playerList[1].favorites[1]);

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// 別解
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
};

console.log(sum / playerList.length);

// Q6
function sayHello() {
  console.log("Hello");
};

sayHello();

const sayWorld = function(){
  console.log("World");
};

sayWorld();

// Q7
user.birthday = "2000-09-27";
user.sayHello = function(){
  console.log("Hello!");
};

user.sayHello();

// Q8
let calc = {
  add: function(x, y){
    console.log(x + y);
  },
  subtract: function(x, y){
    console.log(x - y);
  },
  multiply: function(x, y){
    console.log(x * y);
  },
  divide: function(x, y){
    console.log(x / y);
  }
};

calc.add(2, 5);
calc.subtract(13, 3);
calc.multiply(7, 7);
calc.divide(10, 2);

// Q9
function remainder(x, y){
  return x % y;
};

console.log(5 + " を " + 3 + " で割った余りは " + remainder(5, 3) + " です。");

// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);
//
// 関数fooで変数xが定義されているので
// console.logの時にスコープ外になっていてxを参照できていないため。

// 応用問題
// Q1 0~9のランダムの整数の表示
console.log(Math.floor(Math.random() * 10));

// Q2 3秒後にコンソールに表示
window.setTimeout(function(){
  console.log("Hello World!");
}, 3000);

// Q3
let num = 0;
if (num > 0){
  console.log("num is greater than 0");
} else if (num < 0){
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

// Q4
let numbers = [];

for(let i = 0; i < 100; i++){
  numbers[i] = i;
}

console.log(numbers);

// Q5
let mixed = [4, "2", 5, "8", "9", 0, 1];

for(let i = 0; i < mixed.length; i++){
  if(Number.isFinite(mixed[i]) === false){
    console.log("not number");
  } else if(mixed[i] % 2 === 0){
    console.log("even");
  } else {
    console.log("odd");
  };
};