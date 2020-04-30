import { createStore } from "redux";
import reducer from "../reducers";
import movies from "../static_data.json";
const initialState = movies;
const store = createStore(reducer, initialState);

export default store;
