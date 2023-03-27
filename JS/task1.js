'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','0')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

console.log('start')

const question_1 = 'Один из последних просмотренных фильмов?'
const question_2 = 'На сколько его оцените?'


for (let i = 1; i < 3; i++) {
  const lastWatchedFilm1 = prompt(question_1,'').trim()
  if (lastWatchedFilm1.length < 1 || lastWatchedFilm1.length > 10) {
    i--
    continue
  }
  personalMovieDB.movies[lastWatchedFilm1] = prompt(question_2, '').trim()

}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено мало фильмов')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман')
} else {
  console.log('Произошла ошибка')
}

console.log(personalMovieDB)

