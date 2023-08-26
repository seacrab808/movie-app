import { createRouter } from "../core/heropy";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About"
import NotFound from './NotFound'

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound },  // .{0, } 0개 이상 일치 -> .* 로 대체 가능
]);
