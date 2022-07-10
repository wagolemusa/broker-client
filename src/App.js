
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Sell from './components/home/Sell';
import Buy from './components/buy/Buybusiness';
import Sell from './components/sell/sell';
import Show from './components/home/Show';
import Login from './components/home/Login';
import About from './components/dashboard/About';
import Nav from './components/navbar/Nav';
import Getbuyer from './components/dashboard/Getbuyer';
import Getseller from './components/dashboard/Getseller';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navbar /> */}
      <Nav/>
      
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sell" element={<Sell />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/show' element={<Show />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/sellers' element={<Getbuyer />} />
          <Route path='/buyers' element={<Getseller />} />

          
        </Routes>

        </Router>
    
    </div>
  );
}

export default App;
