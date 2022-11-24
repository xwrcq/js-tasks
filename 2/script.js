let numberOfFilms = prompt("Скільки фільмів ви подивились", '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

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

// let counter = 2;
// while (counter) {
// 	let a = prompt('Один з останніх фільмів', ''),
// 		b = prompt('Оцінка', '');

// 	if ((a == '') || (a == null) || (b == '') || (b == null) || (a.length > 50)) {
// 		console.log("error");
// 		counter++;
// 		continue;
// 	}

// 	personalMovieDB.movies[a] = b;
// 	console.log("done");
// 	counter--;
// }

console.log(personalMovieDB.count < 10 ? "Достатньо мало фільмів"
	: personalMovieDB.count < 30 ? "Класичний глядач"
		: personalMovieDB.count >= 30 ? "Кіноман"
			: "Помилка");

console.log(personalMovieDB);