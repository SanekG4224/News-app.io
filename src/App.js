import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Politics from './components/Politics';
import Sport from './components/Sport';
import Media from './components/Media';
import Economy from './components/Economy';
import MainPage from './components/MainPage';
import logo from './assets/logo.png';

function App() {
  return ( 
    <BrowserRouter >
      <div className = "App" >
        <div className="header">
          <nav className="header__nav container"> 
            <div className="header__logo">
              <img src={logo} alt="" className="logo" />
            </div>
            <div className="Navlink-bar">
              <NavLink exact to="/">Main</NavLink>
              <NavLink to="/politics">Politics</NavLink>
              <NavLink to="/sport">Sport</NavLink>
              <NavLink to="/media">Media</NavLink>
              <NavLink to="/economy">Economy</NavLink>
            </div>
          </nav>
          <div className="header__content container">
            <h1>Where to watch the Conservative leadership debates</h1>
            <p>It was the proposal designed to take the heat out of when and where the leaders of the two major parties would debate each other in the lead-up to the election.</p>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/media" element={<Media />} />
          <Route path="/economy" element={<Economy />} />
        </Routes> 
      </div> 
    </BrowserRouter >
  );
}

export default App;