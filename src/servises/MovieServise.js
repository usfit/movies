class MovieServise {
  baseUrl = 'https://api.themoviedb.org/3/search/movie?';

  key = 'api_key=46de638241c04e3c39b3cee8c2703a3d';

  query = 'return';

  page = 1;

  url = `${this.baseUrl}${this.key}&query=${this.query}&page=${this.page}`;

  async getSearchMovies() {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error(`Ошибка по ${this.url} , статус ${res.status}`);
    }
    const body = await res.json();
    return body.results;
  }
}

export default MovieServise;
