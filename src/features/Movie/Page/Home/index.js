/** @format */

import React, { useContext, useState ,useEffect} from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/itemmovie-context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as Paginationn, Autoplay,Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  /* padding: 0 20px; */
  margin: 0;
  margin-top: 20px;
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 100%;
    background-color: #fff;
  }
`;
const keyvalue = [
  {
    key: "phimchieurap",
    title: "Phim chiếu rạp",
  },
  {
    key: "phimbo",
    title: "Phim bộ",
  },
  {
    key: "phimhoathinh",
    title: "Phim hoạt hình",
  },
  {
    key: "phimle",
    title: "Phim lẻ",
  },
];

const HomePage = ({ data }) => {
  const pageSize = 18;
  const [column,setColumn] = useState(5);
  let navigate = useNavigate();
  const [current, setCurrent] = useState({
    data: data.phim,
    minIndex: 0,
    maxIndex: pageSize,
    current: 1,
  });
  const {setMovie } = useContext(UserContext);
  const onChange = page => {
    setCurrent(prev => {
      return {
        ...prev,
        current: page,
        minIndex: (page - 1) * pageSize,
        maxIndex: page * pageSize,
      };
    });
  };

  const handleClickItem = (id, keyid) => {
    setMovie(data.phim[keyid][id]);
    navigate("/detail");
  };
  useEffect(() => {
    const columns = () =>{
      if(window.innerWidth < 739){
        setColumn(1)
      }
      if (window.innerWidth > 739 && window.innerWidth < 1024){
        setColumn(3)
      }
      if(window.innerWidth > 1023){
        setColumn(4)
  
      }
      if(window.innerWidth > 1200){
        setColumn(5)
      }
    }
    columns();
    window.addEventListener("resize", columns);
    return () => window.removeEventListener('resize', columns);
  },[])
  return (
    <Container>
      {keyvalue.map((item, index) => {
        const { key, title } = item;
        return (
          <div key={key}>
            <Title className='title'>{item.title}</Title>
              <Swiper
              spaceBetween={1}
              modules={[Navigation, Paginationn,Autoplay,Scrollbar]}
              slidesPerView={column}
              navigation
              autoplay={{ delay: 3000 }}
              scrollbar={{ draggable: true }}
            >
            <MovieListContainer className='row'>
              {current?.data &&
                current?.data[key] &&
                current.data[key].map((item, index) => {
                  return (
                    index >= current.minIndex &&
                    index < current.maxIndex && (
                      <SwiperSlide key={index}>
                        <MovieItem
                          onClick={handleClickItem}
                          id={index}
                          keyid={key}
                          item={item}
                          typemovie={title}
                          slide={true}
                        />
                      </SwiperSlide>
                    )
                  );
                })}
            </MovieListContainer>
            </Swiper>
          </div>
        );
      })}
      <Pagination
        pageSize={pageSize}
        current={current.current}
        total={200}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default React.memo(HomePage);
