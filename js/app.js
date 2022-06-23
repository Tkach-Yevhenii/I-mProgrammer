
let progressBar = document.querySelector(".circular__progress");
let valueContainer = document.querySelector(".value__container");


let progressValue = 0;
let progressEndValue = 65;
let speed = 20;

let progress = setInterval(() => {
	progressValue++;

	valueContainer.textContent = `${progressValue}%`;
	progressBar.style.background = `conic-gradient (
		#4d5bf9 ${progressValue *3.6}deg,
		#cadcff ${progressValue*3.6}deg
	)`;
	if(progressValue == progressEndValue)
	{
		clearInterval(progress)
	}
}, speed);





let progressBarTwo = document.querySelector(".circular__progressTwo");
let valueContainerTwo = document.querySelector(".value__containerTwo");

let progressValueTwo = 0;
let progressEndValueTwo = 100;
let speedTwo = 20;

let progressTwo = setInterval(() => {
	progressValueTwo++;

	valueContainerTwo.textContent = `${progressValueTwo}%`;
	if(progressValueTwo == progressEndValueTwo)
	{
		clearInterval(progressTwo)
	}
}, speedTwo);


