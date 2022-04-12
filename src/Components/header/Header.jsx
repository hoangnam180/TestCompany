 import React from 'react';
 import styled from 'styled-components';
 import {SearchOutlined} from '@ant-design/icons';
 import { Input } from 'antd';
 import Logo from '../../Assets/logo/popcorn.png';
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
    .header_logobox{
        display: flex;
        align-items: center;
    }
    .header_title{
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
    }
    .header_icon{
        font-size:2.5rem;
        color: #666;
        margin : 0 1rem;
    }
    .header_searchbox{
        display: flex;
        align-items: center;
        padding: 1rem;
        background-color: white;
        border-radius: 0.6rem;
        margin-left: 2rem;
        width: 50%;
        overflow: hidden;
    }
    .input_search{
        flex: 1;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        font-size: 1.6rem
    }
 `
 const Header = (props) => {
    const {input,setInput,timeoutId,setTimeoutId,fetchData} = props;
    const onChangInput = (e) =>{
        clearTimeout(timeoutId);
        setInput(e.target.value)
        const timeout = setTimeout(() =>fetchData(e.target.value),1000);
        setTimeoutId(timeout);
    }
     return ( 
            <HeaderWrapper>
                <div className="header_logobox">
                <img className="header_logo" src={Logo} alt="logo"/>
                <h1 className="header_title">Movie App</h1>
                </div>
                <div className='header_searchbox'>
                <SearchOutlined className='header_icon'/>
                <Input value={input} onChange={onChangInput} placeholder='Search Movie' className='input_search'/>
                </div>
            </HeaderWrapper>
      );
 }
  
 export default Header;