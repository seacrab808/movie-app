import { Component } from "../core/heropy";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*html*/ `
      <div class="movies">

      </div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl.append(
      ...movieStore.state.movies.map((movie) => {
        // 전개 연산자로 배열 풀어주기
        // MovieItem의 super에서 쓰는 인자로 movie 내려주기(props)
        return new MovieItem({ movie }).el; // 속성과 이름이 같으면 생략 가능
      })
    );
  }
}
