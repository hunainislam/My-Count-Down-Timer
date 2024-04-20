#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type : "input",
    name : "userInput",
    message : "Enter Your desired seconds: ",
    validate : (input) => {
        if (isNaN(input)){
            return "Please enter Valid Number"
        } else if (input > 60){
            return "seconds must be 60 "
        } else {
            return true
        }
    }
})

let input = res.userInput;

function startTime(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime)
    setInterval( () => {
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if (timeDiff <= 0){
            console.log("Timer has expired");
            process.exit()
        }
        const min = Math.floor((timeDiff%(3600*24)) / 3600);
        const sec = Math.floor( timeDiff % 60)
        console.log(`${min}:${sec}`);
        
    },1000)
}

startTime(input)