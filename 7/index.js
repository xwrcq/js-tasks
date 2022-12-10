let container = document.querySelector('.container');
let colorChangeButton = document.getElementById('color-change');

pageStart();

colorChangeButton.addEventListener('click', colorChange);

function pageStart() {
	colorChange();
}

function colorChange() {
	let circles = container.querySelectorAll('.circle');

	circlesRemove(circles);

	let rgbColorOne = `rgb(${getRandom(0, 256, 3)})`;
	let rgbColorTwo = `rgb(${getRandom(0, 256, 3)})`;
	let rgbColorThree = `rgb(${getRandom(0, 256, 3)})`;
	let gradientDeg = getRandom(0, 271);

	container.style.backgroundImage = `linear-gradient(${gradientDeg}deg, ${rgbColorOne}, ${rgbColorTwo}, ${rgbColorThree})`;
	colorChangeButton.style.backgroundImage = `linear-gradient(-${gradientDeg}deg, ${rgbColorOne}, ${rgbColorThree}, #fff)`;

	let circleAmount = getRandom(5, 10);
	let colors = [rgbColorOne, rgbColorTwo, rgbColorThree];

	createCircles(colors, circleAmount);
}

function createCircles(colors, amount) {
	let circle = document.createElement('div');
	let circleSize = getRandom(100, 400);
	let circleColor = colors[getRandom(0, colors.length - 1)];

	circle.style.height = circle.style.width = circleSize + 'px';
	circle.style.position = 'absolute';
	circle.style.backgroundColor = `${circleColor}`;
	circle.style.borderRadius = `50%`;
	circle.style.filter = `blur(${getRandom(10, 25)}px)`;
	circle.style.top = getRandom(0, 100) + '%';
	circle.style.left = getRandom(0, 100) + '%';

	circle.classList.add('circle');

	container.insertAdjacentElement('afterbegin', circle);

	cirlceAnimation(circle);

	return amount == 0 ? true : createCircles(colors, amount - 1);
}

function getRandom(min, max, amount) {
	if (amount) {
		let result = [];

		for (let i = 0; i < amount; i++) {
			result[i] = Math.floor(min + Math.random() * (max + 1 - min));
		}

		return result;
	} else {
		return Math.floor(min + Math.random() * (max + 1 - min));
	}
}

function circlesRemove(elements) {
	elements.forEach(element => element.remove());
}

function cirlceAnimation(element) {
	let animationTypes = ["slideDown", "slideUp", "slidLeft", "slideRight"];
	let currentanimationType = animationTypes[getRandom(0, animationTypes.length - 1)];
	let animationDuration = getRandom(20, 50);

	element.style.animation = `${currentanimationType} ${animationDuration}s ease-in-out infinite`;
}