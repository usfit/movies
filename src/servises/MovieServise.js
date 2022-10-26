class MovieServise {
  baseUrl = 'https://api.themoviedb.org/3/search/movie?';

  key = 'api_key=46de638241c04e3c39b3cee8c2703a3d';

  page = 1;

  async getSearchMovies(query) {
    const url = `${this.baseUrl}${this.key}&query=${query}&page=${this.page}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Ответ в сети был не ок , статус ${res.status}`);
    }
    const body = await res.json();
    return body.results;
  }
}

export default MovieServise;
