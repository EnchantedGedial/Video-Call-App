import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Room from './Components/Room';
import Login from './Components/Login';


const App = () => {
	return (
	
    <>
   
   <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path="room/:roomId" element={<Room/>} />
          <Route path="login" element={<Login />} />
        
         
        
      </Routes>
    </BrowserRouter>
    </>
	)
}

export default App