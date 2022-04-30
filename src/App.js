/** @format */

import "./App.css";
import Header from "./Components/header/Header";
import HomePage from "./features/Movie/Page/Home";
import DetailPage from "./features/Movie/Components/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import Footer from "./Components/footer/Footer";
import SeriesMovie from "./features/Movie/Page/SeriesMovie/SeriesMovie";
import MovieTheaters from "./features/Movie/Page/MovieTheaters/MovieTheaters";
import Cartoon from "./features/Movie/Page/Cartoon/Cartoon";
import OddMovie from "./features/Movie/Page/OddMovie/OddMovie";
import { UserContext } from "./context/itemmovie-context";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const respon = await axios.get(
          "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR0nJYHjOqJY60a9OJKatwQ8iBP9p6zyTPB9-mfjyLSa5TJGbalHhODluXw",
        );
        const { data } = await respon;
        setData(data);
        console.log("renderapp");
      } catch (error) {
        console.log("Fail to get products", error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <BrowserRouter>
        <div className='App'>
          <Header />
          {loading ? (
            <div className='example'>
              <Spin />
            </div>
          ) : (
            <Routes>
              <Route path='/' element={<HomePage data={data} />} />
              <Route path='/detail/*' element={<DetailPage />} />
              <Route path='/phimbo/*' element={<SeriesMovie data={data} />} />
              <Route
                path='/phimchieurap/*'
                element={<MovieTheaters data={data} />}
              />
              <Route path='/phimhoathinh/*' element={<Cartoon data={data} />} />
              <Route path='/phimle/*' element={<OddMovie data={data} />} />
            </Routes>
          )}
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
