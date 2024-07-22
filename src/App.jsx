// App.jsx
import React, { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MidSection from './Components/MidSection';
import Button from './Components/Button';
import { themecontext } from './Components/Context';

function App() {
  const { theme } = useContext(themecontext);

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      textAlign: 'center', height: "100vh", width: "100%"
    }}>


      <Navbar />

      <br />
      <MidSection />

    </div>
  );
}

export default App;   
