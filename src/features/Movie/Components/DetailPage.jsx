import React from 'react';
import styled from 'styled-components';

const DetaiPageContainer = styled.div`
    display: flex;
    padding: 20px 30px;
    border-bottom: 1px solid lightgrey;
    .movie_item_img{
        height: 350px;
        object-fit: cover;
        overflow: hidden;
        width: 350px;
    }
    .about{
        display: flex;
        flex-direction: column;
        margin: 20px;
    }
    .movie_item_title{
        font-size: 18px;
        font-weight: 600;
        color: black;
        margin: 15px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-transform: capitalize;
    }
    .movie_item_info{
        display: flex;
    }
    .movie_item_info span{
        font-size: 15px;
        font-weight: 400;
        color: black;
        text-transform: capitalize;
        text-overflow: ellipsis;
        &{
            opacity: 0.5;
            margin-left: 5px;
        }
    }
    .close{
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
        padding: 5px;
    }
`
const DetaiPage = () => {
    
    return (  
        <DetaiPageContainer>
            <img className='movie_item_img' src='' alt='poster'/>
            <div className='about'>
                <h4 className='movie_item_title'>Tit</h4>
                <span className='movie_item_info'>IMDB Rating:</span>
                <span className='movie_item_info'>Year:<span></span></span>
                <span className='movie_item_info'>Language:<span></span></span>
                <span className='movie_item_info'>Rated:<span></span></span>
                <span className='movie_item_info'>Released:<span></span></span>
                <span className='movie_item_info'>Runtime:<span></span></span>
                <span className='movie_item_info'>Director:<span></span></span>
                <span className='movie_item_info'>Actors:<span></span></span>
                <span className='movie_item_info'>Plot:<span></span></span>
            </div>
            <div className='close'>X</div>
        </DetaiPageContainer>
    );
}
 
export default DetaiPage;