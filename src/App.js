import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Header from './Components/header/Header';
import { API_KEY } from './constants/apikey';
import MovieList from './features/Movie/Page/ListPage';
function App() {
  const [input,setInput] = useState('');
  const [timeoutId,setTimeoutId] = useState();
  const [listMovie,setListMovie] = useState([]);
  const fetchData = async (SearchInput)=>{
   const response = await axios.get(`https://www.omdbapi.com/?s=${SearchInput}&apikey=${API_KEY}`)
   setListMovie(response.data.Search)
  }

  return (
    <div className="App">
        <Header fetchData = {fetchData} input={input} setInput = {setInput} timeoutId = {timeoutId} setTimeoutId = {setTimeoutId} />
        <MovieList data = {listMovie}/>
    </div>
  );
}

export default App;
