'use strict';

document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	let adv = document.querySelectorAll(".promo__adv img");
	let poster = document.querySelector(".promo__bg");
	let genre = poster.querySelector(".promo__genre");
	let movieList = document.querySelector(".promo__interactive-list");
	let addForm = document.querySelector(".add");
	let addInput = addForm.querySelector(".adding__input");
	let checkbox = addForm.querySelector("[type='checkbox']");

	addForm.addEventListener("submit", (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		let favorite = checkbox.checked;

		if (newFilm) {

			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.log("yes");
			}

			movieDB.movies.push(newFilm);

			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, movieList);
		}

		event.target.reset();
	});

	function deleteAdv(arr) {
		arr.forEach(item => item.remove());
	}

	const makeChanges = () => {
		genre.textContent = "Драма";

		poster.style.backgroundImage = "url('img/bg.jpg')";
	}

	const sortArr = (arr) => {
		arr.sort();
	}

	function createMovieList(films, parent) {
		sortArr(films);

		parent.innerHTML = "";

		films.forEach((film, index) => {
			parent.innerHTML += `
				<li class="promo__interactive-item">${index + 1}. ${film}
					<div class="delete"></div>
				</li>
			`;
		});

		document.querySelectorAll(".delete").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();

				films.splice(index, 1);

				createMovieList(films, parent);
			})
		});
	}

	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, movieList);

});