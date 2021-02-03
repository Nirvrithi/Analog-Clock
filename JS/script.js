function rotateClock(){
	const HourHand = document.querySelector(".hours")
	const MinuteHand = document.querySelector(".minutes")
	const SecondHand = document.querySelector(".seconds")

	const currentTime = new Date()
	const hours = currentTime.getHours()
	const minutes = currentTime.getMinutes()
	const seconds = currentTime.getSeconds()

	const secondsFraction = seconds/60;
	const minutesFraction = (secondsFraction+minutes)/60;
	const hoursFraction = (minutesFraction+hours)/12;
 
    const SecondsAngle = secondsFraction*360;
    const MinutesAngle = minutesFraction*360;
    const HoursAngle = hoursFraction*360;
 
    SecondHand.style.transform = `rotate(${SecondsAngle}deg)`
    MinuteHand.style.transform = `rotate(${MinutesAngle}deg)`
    HourHand.style.transform = `rotate(${HoursAngle}deg)`
}

setInterval(rotateClock,1000)