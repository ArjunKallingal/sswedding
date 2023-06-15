import './App.css';
import Navbar from './Navebar/navbar';
import Footer from './Footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Catering from './Pages/Catering';
import Brithday from './Pages/Brithday'
import HouseDec from './Pages/HousrDec'
import Wedding from './Pages/Wedding'
import CarBouquet from './Pages/CarBouquet'
import Services from './Pages/Services';
import Whyus from './Pages/Whyus';

function App() {
  return (
    <div className="App">
      {/* <div className='nav'> */}
        <Navbar />
      {/* </div> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/catering' element={<Catering />} />
          <Route path='/brithday' element={<Brithday />} />
          <Route path='/car-bouquet' element={<CarBouquet />} />
          <Route path='/house-deceration' element={<HouseDec />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/services' element={<Services />} />
          <Route path='/why-us' element={<Whyus />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
