import { Component } from "../core/heropy";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    // pageMax(최대 페이지수)와 현재 페이지 비교해서 더 출력 할지 말지
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove("hide")
        : this.el.classList.add("hide");
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more...";

    this.el.addEventListener("click", async () => {
      this.el.classList.add("hide"); // 한 번 더 누르기 방지
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
