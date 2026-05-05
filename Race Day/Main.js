let raceNumber = Math.floor(Math.random() * 1000);
let Early = false;
let RunnerAge = 18;
if (Early && RunnerAge >= 18) {
    raceNumber += 1000;
    console.log(`Welcome to the Race!` + '\n' +  `Your Race Starts At 9:30am Get ready ${raceNumber}`);
} else if (RunnerAge >18 && Early == false) {
    console.log(`Hello Welcome to Your race your number is ${raceNumber}`);
} else if (RunnerAge < 18) {
    console.log(`Hello Your race will be at 12:30pm ${raceNumber}`)
} else if (RunnerAge == 18) {
    console.log(`Please see the Registration desk!`)
};
