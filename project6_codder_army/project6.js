

let countdown=document.getElementById("div");
setInterval(()=>{const currentTime = Date.now();// gives current time in milliseconds since January 1, 1970
const olympicTime=new Date(2028,6,14).getTime();//gettime used to get time in milliseconds since January 1, 1970 to the date of the olympics
let timer=olympicTime-currentTime;//calculating the difference between the current time and olympic time


const day=Math.floor(timer/(1000*60*60*24));//calculating the number of days left for the olympics,basically floor used to remoove the decimal values.
timer=timer%(1000*60*60*24);//calculating the remaining time after calculating the days left.as remaining time will be used to calculate hours,minutes and seconds.
const hour=Math.floor(timer/(1000*60*60));//calculating the number of hours left for the olympics
timer=timer%(1000*60*60);//calculating the remaining time after calculating the hours left.as remaining time will be used to calculate minutes and seconds.
const minute=Math.floor(timer/(1000*60));
//calculating the number of minutes left for the olympics
timer=timer%(1000*60);//calculating the remaining time after calculating the minutes left.as remaining time will be used to calculate seconds.
const second=Math.floor(timer/(1000));//calculating the number of seconds left for the olympics

console.log(day,hour,minute,second);
countdown.textContent=`${day} days ${hour} hours ${minute} minutes ${second} seconds`;},1000);