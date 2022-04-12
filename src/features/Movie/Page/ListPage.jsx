import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_KEY } from '../../../constants/apikey';
import MovieItem from '../Components/MovieItem';
import DetaiPage from './DetailPage';

const MovieListContainer = styled.div`
    display: flex;
    flex-wrap:wrap ;
    padding: 30px;
    justify-content: space-evenly;
    gap : 24px;
`

const Loading = () => {
    return ( <>Loading</> );
}
 
const MovieList = (props) => {
    const {data} = props
    const [selectedMovie,setSelectedMovie] = useState()
    const [movieInfo,setMovieInfo] = useState()
    const fetchInfo = async (id) => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        setMovieInfo(response.data)
    }
    const onSelectMovie = (id)=>{
        setSelectedMovie(id)
    }
    useEffect(()=>{
        fetchInfo(selectedMovie)
    },[selectedMovie])
    const onClose = () =>{
        setSelectedMovie(null);
        setMovieInfo(null);
    }
    return (  
        <>
        {selectedMovie && movieInfo && <DetaiPage onClose={onClose} movieInfo={movieInfo}/>}
        <MovieListContainer>
            {data && data !==null && data.length > 0 && data !== undefined ? data.map((movie,index)=>{
                return <MovieItem onSelectMovie={onSelectMovie} key={movie.imdbID} movie = {movie}/>
            }) : "Không tìm thấy phim nào giống !!"}
        </MovieListContainer>
        </>
    );
}
 
export default MovieList;