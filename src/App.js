import React from 'react'
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Tvshows from "./Components/Tvshows/Tvshows";
import Movies from "./Components/Movies/Movies";
import Mylist from "./Components/Mylist/MyList";
import Recent from "./Components/Recent/Recent"
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage"


function App() {
  // const[data,setData]=useState("");
  return (
    <>
   
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/mylist" element={<Mylist />} />
        
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/signin" element={<LoginPage />} />
      
      
      </Routes>
    
     
      
    </Router>
   
   
    <Footer/>
    </>
    
  );
}

export default App;
