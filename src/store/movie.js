import { Store } from "../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  const res = await fetch(
    `https://www.omdapi.com?apikey=a046aaa0&s=${store.state.searchText}&page=${page}`
  );
  const json = await res.json(); // 서버에서 가져온 내용 분석
  console.log(json);
};
