import { Store } from "../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=a046aaa0&s=${store.state.searchText}&page=${page}`
  );
  const { Search } = await res.json(); // 객체 구조 분해 할당
  store.state.movies = [...store.state.movies, ...Search]; // 2, 3... 페이지 상태 업데이트 해야하니까
};
