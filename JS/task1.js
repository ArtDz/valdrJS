'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','0')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const question_1 = 'Один из последних просмотренных фильмов?'
const question_2 = 'На сколько его оцените?'

const lastWatchedFilm1 = prompt(question_1,''),
      lastWatchedFilm_1_Score = prompt(question_2,''),
      lastWatchedFilm2 = prompt(question_1,''),
      lastWatchedFilm_2_Score = prompt(question_2,'')

personalMovieDB.movies[lastWatchedFilm1] = lastWatchedFilm_1_Score
personalMovieDB.movies[lastWatchedFilm2] = lastWatchedFilm_2_Score

console.log(personalMovieDB)
