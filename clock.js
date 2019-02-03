var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");
function setDate(){
    var now = new Date();
    var seconds = now.getSeconds();
    var secondDegrees = ((seconds/60)*360)+90;
    console.log(secondDegrees);
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)" ;
    
    var minutes = now.getMinutes();
    var minuteDegrees = ((minutes/60)*360)+90;
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)" ;
    var hourDegrees = ((minutes/60)*30);

    var hours = now.getHours();
    hourDegrees += ((hours/12)*360)+90;
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)" ;
    if(secondDegrees==90)
    {
        var hand = document.querySelectorAll(".hand");
        for(var i=0;i<hand.length;i++)
        {
            hand[i].style.transition = "all 0s";
        }
    }
}
setInterval(setDate, 1000);