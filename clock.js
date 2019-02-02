var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");
function setDate(){
    var now = new Date();
    var seconds = now.getSeconds();
    var secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)" ;
    
    var minutes = now.getMinutes();
    var minuteDegrees = ((minutes/60)*360)+90;
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)" ;

    var hours = now.getHours();
    var hourDegrees = ((hours/12)*360)+90;
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)" ;
    console.log(hours);
}
setInterval(setDate, 1000);