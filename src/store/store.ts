import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './features/News/newsSlice'
import movieReducer from './features/Movie/MovieSlice'
import slotsReducer from './features/Slots/SlotsSlice'

export const store = configureStore({
    reducer:{
        news:newsReducer,
        movie:movieReducer,
        slots:slotsReducer

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;