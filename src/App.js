//import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './component/Navbar';

import Home from './component/Home';
import WCA from './component/WCA';
import MCA from './component/MCA';
import MCL from './component/MCL';
function App() {
  return (
    <div className="App">
      
     <Navbar/>

     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MCL" element={<MCL/>} />
          <Route path="/WCA" element={<WCA/>} />
          <Route path="/MCA" element={<MCA/>} />
         
        </Routes>
    </div>
  );
}

export default App;
