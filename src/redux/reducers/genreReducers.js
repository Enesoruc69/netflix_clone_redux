import { actionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    genres: [],
}

const genreReducer = (state = initialState, { type, payload}) => {
   switch (type) {
     case actionTypes.GENRES_LOADING:
       return {...state, isLoading: true };
     case actionTypes.GENRES_SUCCESS:
       return {...state, isLoading: false, genres: payload };
     case actionTypes.GENRES_ERROR:
       return {...state, isLoading: false, error: payload };
     default:
       return state; 
   }  
}

export default genreReducer;