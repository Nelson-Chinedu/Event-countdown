//setthe count down time from the date object and store in a variable
var countDown = new Date("mar 2 2018 24:00:00").getTime();


//creating a function to set time interval 
var x = setInterval(function(){
    //get the current time from the date object
    var now = new Date().getTime();

    //getting the distance from now and countDown variables
    var distance = countDown - now;

    //getting the time calculations
    var day = Math.floor(distance / (1000 *60 *60*24));
    var hour = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(distance % (1000*60*60)/(1000*60));
    var seconds = Math.floor(distance % (1000*60)/1000);

    //outputting the time calculation to the html element tag
    document.getElementById("countDownTimer").innerHTML = day+"d"+" : "+hour+"h"+" : "+minutes+"m"+" : "+seconds+"s";

    //condition to clear interval if distance < 0
    if (distance < 0){
        clearInterval(x);
        document.getElementById("countDownTimer").innerHTML = "CONGRATS TO THE LEARNERS";
    }
},1000);
