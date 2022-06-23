
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

window.addEventListener("load", windowLoad);

function windowLoad()
{
	function digitsCountersInit(digitsCountersItems) 
	{  
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if(digitsCounters)
		{
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	function digitsCountersAnimate(digitsCounter)
	{
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter):1000;

		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;

		const step = (timestamp) => {
			if(!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp)/duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if(progress < 1)
			{
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	//digitsCountersInit();

	let options = {
		threshold: 0.3
	}

	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				const targetElement = entry.target;
				const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
				if(digitsCountersItems.length) {
					digitsCountersInit(digitsCountersItems);
				}
			}
		});
	}, options);

	let sections = document.querySelectorAll('.page__section');
	if(sections.length)
	{
		sections.forEach(section => {
			observer.observe(section)
		});
	}
}
