import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movies, movies } from './MovieData';
interface MoviesState{
    movies : Movies[];
    selectedMovie:Movies;
    selectedCity:string | null,
    selectedChain:string;
    selectedStudio:string;
    searchTheatre:string;

}

const initialState:MoviesState = {
    movies,
    selectedMovie: movies.length > 0 ? movies[0] : ({} as Movies), // Set default movie if available
    selectedCity: 'Surat',
    selectedChain:'All',
    selectedStudio:'',
    searchTheatre:''
}

const MovieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovie:(state,action: PayloadAction<Movies>)=>{
            state.selectedMovie = action.payload;
        },
        setCity:(state,action: PayloadAction<string>)=>{
            state.selectedCity = action.payload;
        },
        setStudio:(state,action: PayloadAction<string>)=>{
            state.selectedStudio= action.payload;
        },
        setChain:(state,action: PayloadAction<string>)=>{
            state.selectedChain= action.payload;
        },
        resetState: (state) => {
            return initialState;
          },
          setSearchTheatre: (state, action: PayloadAction<string>) => {
            state.searchTheatre = action.payload;
        }
    }
})

export const movieActions = MovieSlice.actions;
export default MovieSlice.reducer;
