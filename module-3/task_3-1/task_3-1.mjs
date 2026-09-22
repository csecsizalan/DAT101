"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
//i did this with my mentor Valeriia

let wakeUpTime = 6;
if (wakeUpTime == 7) {
    printOut("I CAN CATCH THE BUS!");
} else if (wakeUpTime == 8) {
    printOut("I can take the train to school");
} else {
    printOut("I have to take the car then");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number1 = 0;
if(number1 < 0) {
    printOut("negative number");
} else if (number1 > 0) {
    printOut("positive number");
} else {
    printOut("its zero isnt it");
}

printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
let randomNumber = Math.ceil(Math.random() * 8);
printOut(randomNumber);

let maxNumber = 6;
let thankYou = 4;

if (randomNumber >= maxNumber) {
    printOut("Image size is too big");
} else if ((randomNumber >= thankYou) && (randomNumber < maxNumber)) {
    printOut("Thank you");
} else {
    printOut("Image format is too small");
}

printOut(newLine);

printOut("--- Part 8 and 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
printOut(noOfMonth);
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);

switch(monthName) {
    case "January":
    case "February":
    case "Mars":
    case "April":
    case "September":
    case "October":
    case "November":
    case "December":

    printOut("Has vitamin D");
    break;

    case "Mai":
    case "Jun":
    case "Juli":
    case "August":
    
    printOut("does not have vitamin D");
    break;
}

switch(monthName) {
    case "February":
    printOut("28 days");
    break;

    case "April":
    case "Jun":
    case "September":
    case "November":
        printOut("has 30 days in it");
        break;

    default:
    printOut("31 days");
    break;
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch(monthName) {
    case "Mars":
    case "April":
    case "Mai":

    printOut("Closed");
    break;

    default:
    printOut("Open");
    break;
}

printOut(newLine);
