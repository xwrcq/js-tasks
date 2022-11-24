let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Скільки фільмів ви подивились", '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || !isFinite(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви подивились", '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	console.log(personalMovieDB.count < 10 ? "Достатньо мало фільмів"
		: personalMovieDB.count < 30 ? "Класичний глядач"
			: personalMovieDB.count >= 30 ? "Кіноман"
				: "Помилка");
}

detectPersonalLevel();

function showMyDB(db) {
	if (!db.privat) console.log(personalMovieDB);
}

showMyDB(personalMovieDB);

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.geners[i] = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
	}
}

writeYourGenres();