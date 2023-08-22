/*
90 minutes===1.50               1:30
120 minutes ===2.00             
150 minutes ===2.50

"1:50" 
string.split(":")
*/





function toIndustrial(time){
    // Dealing with time as an integer
    if(typeof(time) === "number"){
        const industrialTime = parseFloat((time/60).toFixed(2))  //rounds off to 2dp
        return (industrialTime)
    } 
    // Dealing with string input
    else if (typeof(time === "string")){
        const timeArray = time.split(":")
        const hours = parseInt(timeArray[0])
        const minutes = parseInt(timeArray[1])
        const timeInMins = ((hours*60) + minutes)
        const industrialTime = parseFloat((timeInMins/60).toFixed(2))
        return (industrialTime)
    } 
}

/*
toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
1.50 === 1hr 30 mins ==> "1:30"
2.50 ==== 2hrs 30 mins
3.50 === 3hrs 30mins
3.99 === 3hrs .99mins
1hr = 60 mins
1min = 1/60 hrs
90 mins =?
*/
function toNormal(time){
    // const timeInMins = (time*60)
    const hours = Math.floor(time)
    const industrialMins = (time-hours)
    const normalMins = (60*industrialMins).toFixed(0)
    const normalTimeArray = [hours,normalMins]
    return normalTimeArray.join(":")    
}

console.log(toNormal(0.333333))
// // console.log(toIndustrialTime("1:45"))
// console.log(toIndustrialTime("0:03"))
// // console.log(toIndustrialTime("3:10"))