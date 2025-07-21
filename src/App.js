import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import FileGallery from './FileGallery';
import Navbar from './Navbar'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <FileGallery />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
