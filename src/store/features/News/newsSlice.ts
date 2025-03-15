import { PayloadAction } from './../../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";
import ASSESTS from "../../../assests";
import { articles, extractkeywords, NewsArticle } from './newsData';



interface NewsState {
    articles: NewsArticle[];
    selectedCategory:'Spotlight' | 'News' | 'Video';
    selectedKeyword: string | null;
    keywords: string[];
}

const initialState: NewsState = {
    articles,
    selectedCategory: 'Spotlight',
    selectedKeyword: null,
    keywords: extractkeywords(articles)
}

const newsSlice = createSlice({
    name:'news',
    initialState:{...initialState},
    reducers:{
        setCategory:(state,action: PayloadAction<'Spotlight'|"News"|"Video">) => {
            state.selectedCategory = action.payload;
        },
        setKeyword:(state,action:PayloadAction<string|null>)=>{
            state.selectedKeyword = action.payload;
        }
    }
});

export const {setCategory,setKeyword} = newsSlice.actions;
export default newsSlice.reducer;