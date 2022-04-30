/** @format */

import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Logo from "../../Assets/logo/popcorn.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/itemmovie-context";
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 1rem;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  .header_logo {
    width: 4.8rem;
    height: 4.8rem;
    margin: 0 1.5rem;
  }
  .header_logobox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .header_title {
    color: #ffb6c1;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    position: relative;
    .header_title_inner {
      position: absolute;
      font-size: 13px;
      color: #bcdded;
    }
  }
  .header_icon {
    font-size: 2.5rem;
    color: #666;
    margin: 0 1rem;
  }
  .header_searchbox {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 0.6rem;
    margin-left: 2rem;
    width: 50%;
    overflow: hidden;
  }
  .input_search {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
`;
const Menu = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  .navigation {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  .navigation_link {
    display: block;
    width: 15rem;
    text-align: center;
    border-radius: 3px;
    color: #fff;
    font-size: 2rem;
    padding: 5px;
    transition: all 0.25s linear;
    &.active {
      background-color: #eaeaea;
      color: #333;
    }
    &:hover {
      background-color: #eaeaea;
      color: #333;
      cursor: pointer;
    }
  }
`;

const Header = props => {
  let navigate = useNavigate();
  const {setType} = useContext(UserContext);
  const arrNav = [
    {
      path: "/phimbo",
      name: "Phim bộ",
    },
    {
      path: "/phimchieurap",
      name: "Phim chiếu rạp",
    },
    {
      path: "/phimhoathinh",
      name: "Phim hoạt hình",
    },
    {
      path: "/phimle",
      name: "Phim lẻ",
    },
  ];
  const handleClick = (id, item) => {
      setType(item.path)
  };
  return (
    <>
      <HeaderWrapper>
        <div
          onClick={() => {
            navigate("/");
          }}
          className='header_logobox'>
          <img className='header_logo' src={Logo} alt='logo' />
          <h1 className='header_title'>
            Home19<span className='header_title_inner'>film</span>
          </h1>
        </div>
        <div className='header_searchbox'>
          <SearchOutlined className='header_icon' />
          <Input placeholder='Search Movie' className='input_search' />
        </div>
      </HeaderWrapper>
      <Menu>
        <ul className='navigation'>
          {arrNav.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => handleClick(index, item)}
                  className={`navigation_link`}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Menu>
    </>
  );
};

export default Header;
