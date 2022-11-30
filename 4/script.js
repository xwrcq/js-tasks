let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false,
	start() {
		numberOfFilms = +prompt("Скільки фільмів ви подивились", '');
		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || !isFinite(numberOfFilms)) {
			numberOfFilms = +prompt("Скільки фільмів ви подивились", '');
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Один з останніх фільмів', ''),
				b = prompt('Оцінка', '');

			if ((a == '') || (a == null) || (b == '') || (b == null) || (a.length > 50)) {
				console.log("error");
				i--;
				continue;
			}

			personalMovieDB.movies[a] = b;
			console.log("done");
		}
	},
	detectPersonalLevel() {
		console.log(personalMovieDB.count < 10 ? "Достатньо мало фільмів"
			: personalMovieDB.count < 30 ? "Класичний глядач"
				: personalMovieDB.count >= 30 ? "Кіноман"
					: "Помилка");
	},
	showMyDB(db) {
		if (!db.privat) console.log(personalMovieDB);
	},
	toggleVisibleMyDB() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres() {
		for (let i = 0; i < 3; i++) {
			let genre = prompt(`Ваш улюблений жанр під номером ${i + 1}`);

			if (genre == '' || genre == null) {
				console.log('Неправильно введені дані');
				i--;
				continue;
			}

			personalMovieDB.geners[i] = genre;
		}

		personalMovieDB.geners.forEach((el, indx) => {
			console.log(`Ваш улюблений жанр під номером ${indx + 1} - ${el}`);
		})
	}
};