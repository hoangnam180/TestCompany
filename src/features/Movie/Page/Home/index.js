import React, {  useEffect, useState } from 'react';
import "antd/dist/antd.css";
import { Pagination } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import MovieItem from '../../Components/MovieItem'
import { Spin } from 'antd';
const MovieListContainer = styled.div`
    display: flex;
    flex-wrap:wrap ;
    padding:0 20px;
`
const Container = styled.div`
        .example {
        margin: 20px 0;
        padding: 30px 50px;
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        height: 100vh;
        padding-top: 30vh;
}
`

const Title = styled.h1`
        padding:0 20px;
        margin: 0;
        margin-top: 20px;
        position: relative;
        color: #fff;
        &::before {
            content: '';
            position:absolute;
            height: 1px;
            width:100%;
            top: 100%;
            background-color: #fff;
        }
`
const keyvalue = [
    {
        key : 'phimbo',
        title : 'Phim bộ'
    },
    {
        key : 'phimchieurap',
        title : 'Phim chiếu rạp'
    },
    {
        key : 'phimhoathinh',
        title : 'Phim hoạt hình'
    },
    {
        key : 'phimle',
        title : 'Phim lẻ'
    }
]

const HomePage = () => {
      const pageSize = 8;
      const [loading, setLoading] = useState(true);
      const [currentItem,setCurrentItem] = useState()
      const [current,setCurrent] = useState({
        data : {},
        minIndex: 0,
        maxIndex: 0,
        current : 1
      });

      useEffect(() => {
        (async () => {
            try{
                const respon = await axios.get('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR0nJYHjOqJY60a9OJKatwQ8iBP9p6zyTPB9-mfjyLSa5TJGbalHhODluXw')
                const {data} = await respon;
                setCurrent(prev=>{
                    return {
                        ...prev,
                        data : data.phim,
                        maxIndex: pageSize
                    }
                })
            }catch(error){
                console.log('Fail to get products', error);
            }
            setLoading(false);
        })();

    },[])

      const onChange = page => {
        console.log(page);
        setCurrent((prev)=>{
            return {
                ...prev,
                current:page,
                minIndex:(page - 1) * pageSize,
                maxIndex: page * pageSize
            }

        })
      };

      const handleClickItem = (itemCurr)=>{
          setCurrentItem(itemCurr);
      }
    return ( 
    <Container>
            
            {
            loading ? (
                <div className="example">
                 <Spin />
              </div>
            ) 
            :
            keyvalue.map((item,index) => {
                const {key,title} = item
               return (
                    <div key={key} >
                        <Title className='title'>{item.title}</Title>
                       <MovieListContainer className='row'>
                           {
                               current?.data && current?.data[key] && current.data[key].map((item,index)=>{
                                   
                                   return  index >= current.minIndex &&
                                   index < current.maxIndex &&  (
                                    <MovieItem 
                                    onClick={handleClickItem}
                                    key={index} item={item} typemovie={title}/>
                                    )
                                })
                            }
                       </MovieListContainer>
                </div>
               )
            }
            )}
            <Pagination 
                pageSize={pageSize}
                current={current.current} 
                total={370} 
                onChange={onChange} 
                showSizeChanger={false} 
                size={'big'} 
                style={{textAlign:'right',marginRight:'5%',marginTop:'15px'}}
                />                                     
    </Container>
     );
}
 
export default React.memo(HomePage);