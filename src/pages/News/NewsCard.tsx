import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import ASSESTS from '../../assests'
import { useNavigate } from 'react-router'

const NewsCard : React.FC<{
    article:{
        id:Number,
        title:string,
        description:string,
        image:string,
        category:'Spotlight' | 'News' | "Video"
    },
    index : number
}> = ({article,index}) => {
    const theme = useTheme();
    const isEven = index%2 == 0
    console.log(index)
    const navigate = useNavigate();

    return (
        <Container disableGutters
            maxWidth={false}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                gap:8,
                alignItems: 'center'
            }}>
            <Box
                component='img'
                src={article.image}
                sx={{
                    borderRadius: '10px',
                    width: 585,
                    height: 410,
                    objectFit:'cover',
                    cursor:'pointer'
                }} 
                onClick={() => navigate(`/news/${article.id}`)}/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '24px',
                    minWidth:'600px'
                }}>
                <Typography
                    variant='caption'
                    sx={{ textTransform: 'capitalize', 
                        border: '1px solid',
                        borderColor:'lightgrey.main',
                        borderRadius:{xs:'10%' ,lg:'0'}, 
                        color: 'secondary.main', 
                        width: 'fit-content', 
                        padding: {xs:'0px 10px',sm:1 },
                        bgcolor:{xs:'rgba(0,0,0,0.1)',lg:'inherit'}, 
                        fontSize: {xs:13,sm:16 }}}>{article.category}</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Typography variant='h1'
                    sx={{
                        color:'secondary.main'
                    }}>
                        {article.title}
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            color:'grey.600'
                        }}>
                        {article.description.substring(0,150)}...
                    </Typography>
                </Box>
                <Typography
                    variant='body2'
                    sx={{
                        color:'grey.700'
                    }}>
                    17 Nov 2021 | TIX ID
                </Typography>
            </Box>
        </Container>
    )
}

export default NewsCard
