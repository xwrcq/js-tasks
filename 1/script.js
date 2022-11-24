let numberOfFilms = prompt("Скільки фільмів ви подивились", '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

let a = prompt('Один з останніх фільмів', ''),
	b = prompt('Оцінка', ''),
	c = prompt('Один з останніх фільмів', ''),
	d = prompt('Оцінка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);