import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BuyerForm from './components/BuyerForm';
import Userprofile from './pages/Userprofile';

function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/profile" element={<Userprofile/>}/>
        
       </Routes>
     </Router>
{/* <Userprofile></Userprofile> */}
    </>
  );
}

export default App;
