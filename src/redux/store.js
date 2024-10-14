import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducers";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducers";



const rootReducer = combineReducers ({
    movies: movieReducer,
    genres: genreReducer,
});


export default createStore(rootReducer,applyMiddleware(thunk));