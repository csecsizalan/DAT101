"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + 3 * (2 - 4) * 6"
const part1Answer = 2 + 3 * (2 - 4) * 6;

printOut(orgMatExp)
printOut(newMathExp)
printOut(part1Answer)


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const oneInch = 25.4 
const metersInMillimeters = 25 * 1000;
const centimetersInMillimeters = 34 * 10;
const millimeters = metersInMillimeters + centimetersInMillimeters
const inches = millimeters / oneInch;
printOut(`25 meters = ${inches.toFixed(2)} inches`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const part3DaysInMinutes = 3 * 24 * 60;
const part3HoursInMinutes = 12 * 60;
const part3Minutes = 14;
const part3SecondsInMinutes = 45 / 60;
const part3TotalMinutes = part3DaysInMinutes + part3HoursInMinutes + part3Minutes + part3SecondsInMinutes;
printOut(`3 days, 12 hours, 14 minutes, and 45 seconds = ${part3TotalMinutes} minutes`);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const part4TotalMinutes = 6322.52;
let part4Calc = part4TotalMinutes / (60 * 24); 
const part4Days = Math.floor(part4Calc); 
part4Calc = (part4Calc - part4Days) * 24; 
const part4Hours = Math.floor(part4Calc); 
part4Calc = (part4Calc - part4Hours) * 60; 
const part4Minutes = Math.floor(part4Calc); 
const part4Seconds = Math.round((part4Calc - part4Minutes) * 60);

printOut(`6,322.52 minutes = ${part4Days} days, ${part4Hours} hours, ${part4Minutes} minutes, and ${part4Seconds} seconds`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const part5USD = 54;
const part5USDExchangeRate = 76 / 8.6; 
const part5NOK = part5USD * part5USDExchangeRate; 
printOut(`54 USD = ${Math.round(part5NOK)} NOK`);
const part5NOKExchangeRate = 8.6 / 76; 
const part5USDFromNOK = part5NOK * part5NOKExchangeRate; 
printOut(`${Math.round(part5NOK)} NOK = ${Math.round(part5USDFromNOK)} USD`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

const part6Text = "There is much between heaven and earth that we do not understand.";
printOut(part6Text);
let part6Calc = part6Text.length;
printOut(`Number of characters: ${part6Calc}`);
part6Calc = part6Text.charAt(19);
printOut(`Character at position 19: ${part6Calc}`);
part6Calc = part6Text.substring(35, 35 + 8);
printOut(`Characters starting at position 35 and 8 characters forward: ${part6Calc}`);
part6Calc = part6Text.indexOf("earth");
printOut(`Index at which "earth" starts: ${part6Calc}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

let part7Calc1 = 5 > 3;
printOut(`Is 5 greater than 3? ${part7Calc1}`);
part7Calc1 = 7 >= 7;
printOut(`Is 7 greater than or equal to 7? ${part7Calc1}`);
part7Calc1 = "a" > "b";
printOut(`Is "a" greater than "b"? ${part7Calc1}`);
part7Calc1 = "1" < "a";
printOut(`Is "1" less than "a"? ${part7Calc1}`);
part7Calc1 = "2500" < "abcd";
printOut(`Is "2500" less than "abcd"? ${part7Calc1}`);
part7Calc1 = "Zalan" !== "Csecsi";
printOut(`Is "Zalan" not equal to "Csecsi"? ${part7Calc1}`);
part7Calc1 = (2 === 5) === true;
printOut(`Is 2 not equal to 5? ${part7Calc1}`);
part7Calc1 = ("abcd" > "bcd") === false;
printOut(`Is "abcd" greater than "bcd"? ${part7Calc1}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

printOut(newLine);
printOut('"254" = ' + Number("254"));
printOut('"57.23" = ' + parseFloat("57.23"));
printOut('"25 kroner" = ' + parseInt("25 kroner"));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let r = Math.ceil(Math.random() * 360);
printOut(`Randomly generated number r: ${r} with Math.ceil()`);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const part10TotalDays = 131;
let part10calc = part10TotalDays / 7; 
part10calc = Math.floor(part10calc); 
const part10Weeks = part10calc;
const part10Days = part10TotalDays % 7; 
printOut(`In ${part10TotalDays} days, there are ${part10Weeks} weeks and ${part10Days} days.`);


printOut(newLine);