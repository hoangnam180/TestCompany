import './App.css';
import Header from './Components/header/Header';
import HomePage from './features/Movie/Page/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
