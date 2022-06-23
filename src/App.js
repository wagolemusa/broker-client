
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Sell from './components/home/Sell';
import Buy from './components/buy/Buy';
import Sell from './components/sell/sell';
import Show from './components/home/Show';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
  
    
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sell" element={<Sell />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/show' element={<Show />} />

        </Routes>

        </Router>
    
    </div>
  );
}

export default App;
