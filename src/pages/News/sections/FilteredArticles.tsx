import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectedFilteredArticles } from '../../../store/features/News/newsLogic'
import NewsCard from '../NewsCard'
import RecommendNews from '../../../components/RecommendNews'

const FilteredArticles = () => {
  const filteredArticles = useSelector(selectedFilteredArticles);


  return (
    <Container 
    disableGutters
    maxWidth={false}
    sx={{
      display:'flex',
      flexDirection:'column',
      gap:'100px'
    }}>
      <Container disableGutters
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'flex-start',
          marginTop: '60px',
          gap: 5
        }}>
        {filteredArticles.length == 0 ?
          <h1>No Article Available</h1>
          : filteredArticles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              index={index}
            />))}

      </Container>

      <RecommendNews />
    </Container>
  )
}

export default FilteredArticles
