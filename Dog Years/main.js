let MyAge = 16;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = (MyAge -= 2);
laterYears *= 4;
const MyAgeInDogYears = earlyYears + laterYears;

let Myname = "Landon".toLocaleLowerCase();

console.log(
  `My name is ${Myname}. I am ${MyAge} years old in human years, i am ${MyAgeInDogYears} years old in dog years`,
);
