/*

toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!

Examples
toIndustrial(1) => 0.02
toIndustrial("1:45") => 1.75
toNormal(0.33) => "0:20"


1.50=== 1hr 30mins ===90mins / 1 1/2 hrs
1.75 ==== 1hr 45 mins ===105
"1.30"===1.5

*/





function toIndustrial(time){
    // Dealing with time as an integer
    // eg 90 ===1.50
    if(typeof(time) === "number"){
        const industrialTime = parseFloat((time/60).toFixed(2))  //rounds off to 2dp, but returns a string
        return (industrialTime)
    } 
    // Dealing with string input eg: '1:30'===> 1.50
    else if (typeof(time === "string")){
        const timeArray = time.split(":") 
        const hours = parseInt(timeArray[0]) //1hr
        const minutes = parseInt(timeArray[1]) //30mins
        const timeInMins = ((hours*60) + minutes) //90mins
        const industrialTime = parseFloat((timeInMins/60).toFixed(2)) //string
        return (industrialTime)
    } 
}

// console.log(toIndustrial(91))

/*
toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
1.50 === 1hr 30 mins ==> "1:30"
2.50 ==== 2hrs 30 mins  => '2.30
3.50 === 3hrs 30mins
3.99 === 3hrs .99mins
1hr = 60 mins
1min = 1/60 hrs
90 mins =?
*/
function toNormal(time){ //2.50
    const hours = Math.floor(time) //2
    const industrialMins = (time-hours)//2.50 -2 =0.50*hour
    const normalMins = (60*industrialMins).toFixed(0)
    const normalTimeArray = [hours,normalMins] //"1.30, 1.70
    return normalTimeArray.join(":")    
}

console.log(toNormal(2.99))
// console.log(toNormal(0.333333))
// // console.log(toIndustrialTime("1:45"))
// console.log(toIndustrialTime("0:03"))
// // console.log(toIndustrialTime("3:10"))