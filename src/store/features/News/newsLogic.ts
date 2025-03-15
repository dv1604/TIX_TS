import { RootState } from "../../store";

export const selectedFilteredArticles = (state:RootState) => {
    const {articles,selectedCategory,selectedKeyword} = state.news;

    return articles.filter(article => {
        const matchCategory = article.category === selectedCategory ;
        const matchesKeyword = selectedKeyword ? article.keywords.includes(selectedKeyword): true ;
        return matchCategory && matchesKeyword;
    })
}

export const selectKeywords = (state:RootState) => state.news.keywords;
export const selectCategory = (state:RootState) => state.news.selectedCategory;