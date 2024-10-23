import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Divider from '@mui/material/Divider';
// Add this import

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about-us' element={<AboutUs/>} />
          </Routes>
       
        <Divider /> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
