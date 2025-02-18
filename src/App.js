// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
//import { type } from '@testing-library/user-event/dist/type';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
    const [mode,setMode]=useState('light');//Whether dark mode is enabled or not.
    const[alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

    const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success");
      }
    }
  
  return (
    <Router>
    <>
      <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       {/* <Navbar/> */}
       <div className="container my=3"> 
       {/* <Switch> */}
       {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">*/}
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>  */}
          <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter,character counter,Remove extra spaces" mode={mode} />} />
        </Routes> 
           {/* </Route>
          </Routes> */}
        {/* </Switch>      */}  
       {/* <About/> */}
       </div>
       
       
       
    </>
    // </Router>
  );
  }


export default App;
