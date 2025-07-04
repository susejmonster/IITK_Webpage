import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation, Location } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import Home from "./Components/Home";
import About from "./Components/About";
import ResearchPublications from "./Components/ResearchPublications";
import NonResearchPublications from "./Components/NonResearchPublications";
import MeetTheTeam from "./Components/MeetTheTeam";

import CustomNavbar from './Components/navbar';



const App: FC = () => {
  const location: Location = useLocation();

  return (
    <>
  
      <CustomNavbar/>
     
      <video autoPlay loop muted>
                    <source
                        src="https://www.dropbox.com/scl/fi/eg0c3th4vyjnnz09cwxam/22512-328261507_tiny.mp4?rlkey=sk0uvs93a3uby17qbzdx1c3cx&raw=1"
                        type="video/mp4"
                    />
      </video>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ResearchPublications" element={<ResearchPublications />} />
        <Route path="/NonResearchPublications" element={<NonResearchPublications />} />
        <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
      </Routes>
     
      
      
    </>
   
  );
};

export default App;
