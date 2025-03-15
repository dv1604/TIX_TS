import React, { useEffect } from 'react'
import Slots from './sections'
import { Container } from '@mui/material'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { movieActions } from '../../store/features/Movie/MovieSlice'
import { slotsActions } from '../../store/features/Slots/SlotsSlice'

const SlotBooking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedMovie = useSelector((state: RootState) =>
    state.movie.movies.find((movie) => movie.id === Number(id))
  );

  useEffect(() => {
    if (selectedMovie) {
      dispatch(movieActions.setMovie(selectedMovie));
    }
  }, [dispatch, selectedMovie]);



  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ padding: '0px 72px 0px 72px' }}
    >
      <Slots />
    </Container>
  );
};

export default SlotBooking;
