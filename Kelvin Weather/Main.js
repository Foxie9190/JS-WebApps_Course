//This is For The Forcast in Kelvin for the day
let kelvin = 0;
//This is The Kelvin value in Celcius
let Celsius = (kelvin -= 273);
//This Converts it to fahrenhiet
let Fahrenheit = Celsius * (9 / 5) + 32;
//This Rounds the number
Fahrenheit = Math.floor(Fahrenheit);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);


//"Extra Practice"

let Newton = Celsius * (33/100);
Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton`);