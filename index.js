let start = document.querySelector('#start');
let game = document.querySelector('#game');
let gameTime = document.querySelector('#time');
let gameResult = document.querySelector('#result');
let headerTime = document.querySelector('#time-header');
let resultHeader = document.querySelector('#result-header');
let inputTime = document.querySelector('#input-time');

let score = 0;
let isGameStarted = false;

start.addEventListener('click', startGame);
game.addEventListener('click', handlerBoxClick);
inputTime.addEventListener('input', setInputTime);

function show(el) {
	el.classList.remove('hide');
}

function hide(el) {
	el.classList.add('hide');
}

function startGame() {
	isGameStarted = true;
	score = 0;
	setInputTime();
	inputTime.setAttribute('disabled', true);
	hide(start);
	game.style.backgroundColor = '#fff';

	let interval = setInterval(() => {
		let time = parseFloat(gameTime.textContent);
		if (time <= 0) {
			clearInterval(interval);

			endGame();
		} else {
			gameTime.textContent = (time - 0.1).toFixed(1);
		}
	}, 100)

	renderBox();
}

function handlerBoxClick(event) {
	if (!isGameStarted) {
		return;
	}

	if (event.target.dataset.box) {
		score++;
		renderBox();
	}
}

function renderBox() {
	game.innerHTML = '';

	let box = document.createElement('div');
	let boxSize = getRandom(30, 100);
	let gameSize = game.getBoundingClientRect();
	let maxTop = gameSize.height - boxSize;
	let maxLeft = gameSize.width - boxSize;
	let colors = getRandom(0, 255, 3);


	box.style.height = box.style.width = boxSize + 'px';
	box.style.position = 'absolute';
	box.style.backgroundColor = `rgb(${colors})`;
	box.style.top = getRandom(0, maxTop) + 'px';
	box.style.left = getRandom(0, maxLeft) + 'px';
	box.style.cursor = 'pointer';

	box.setAttribute('data-box', 'true');

	game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max, ...amount) {
	if (amount.length != 0) {
		let result = [];

		for (let i = 0; i < amount[0]; i++) {
			result[i] = Math.floor(min + Math.random() * (max + 1 - min));
		}

		return result;
	} else {
		return Math.floor(min + Math.random() * (max + 1 - min));
	}
}

function setGameScore() {
	gameResult.textContent = score;
}

function setInputTime() {
	let time = +inputTime.value;
	gameTime.textContent = time.toFixed(1);

	show(headerTime);
	hide(resultHeader);
}

function endGame() {
	isGameStarted = false;
	setGameScore();

	show(start);
	hide(headerTime);
	show(resultHeader);

	game.innerHTML = '';
	game.style.backgroundColor = '#ccc';
	inputTime.disabled = false;
}