import './App.css';
import $ from 'jquery';
import axios from 'axios';
import { Link, Outlet, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './components/main/Main';
import List from './components/list/List';
import Profile from './components/profile/Profile';
import { AnimatePresence, motion } from 'framer-motion';
import Experience from './components/experience/Experience';
function App() {

  const location = useLocation();


  return (



    <>
      <AnimatePresence>
        <Routes basename={process.env.PUBLIC_URL} location={location} key={location.pathname}>
          <Route exact path="/" element={
            <>
              <Main />
            </>
          } />
          <Route path="/list" element={
            <List />
          }
          />
          <Route path="/profile" element={
            <Profile />
          }
          />
          <Route path="/experience" element={
            <Experience />
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
