import React from 'react';
import styled from 'styled-components';
const MovieItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:280px;
    box-shadow: 0 3px 10px 0 #aaa;
    padding: 7px;
    cursor: pointer;
    margin-top: 15px;
    .movie_item_img{
        height: 300px;
        object-fit: cover;
        overflow: hidden;
    }
    .movie_item_title{
        font-size: 18px;
        font-weight: 600;
        color: black;
        margin: 15px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .movie_item_info{
        display: flex;
        justify-content: space-between;

    }
    .movie_item_info span{
        font-size: 15px;
        font-weight: 400;
        color: black;
        text-transform: capitalize;
    }
`

const MovieItem = ({movie,onSelectMovie}) => {

    return (  
        <MovieItemContainer onClick={()=>{onSelectMovie(movie.imdbID)}}>
            <img className='movie_item_img' src={movie.Poster} alt='poster'/>
            <h4 className='movie_item_title'>{movie.Title}</h4>
            <div className='movie_item_info'>
                <span>Year: {movie.Year}</span>
                <span>Type: {movie.Type}</span>
            </div>
        </MovieItemContainer>
    );
}
 
export default MovieItem;