'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (this.count === '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB (hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  toggleVisibleMyDB() {
    this.private = !this.private;
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === '' || genre === null) {
        console.log('Вы ввели некорректные данные')
        i--
      } else
      this.genres[i - 1] = genre
    }

    this.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item} `)
    })
  }
};



