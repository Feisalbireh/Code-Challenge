
function speedDetector(speed){
const speedLimit= 70
const speedRate= 5

if (speed < speedLimit){
    return "Ok"
}

const speedDiffernce = speed-speedLimit 

let demPoints = 0
for(let i = 0; i < speedDiffernce; i+=speedRate){
    demPoints += 1

    if(demPoints > 12){
        return "License suspended"
    }
}
return `Points: ${demPoints}`
}
