
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
BrowserRouter as Router,
  // Switch,
  Routes,
  Route
} from "react-router-dom";




function App() {

  
  const [mode, setmode] = useState("dark");
  const [color, setcolor] = useState("white");
  const [alert, setalert] = useState(null);
  const [titleColor, settitleColor] = useState(null);


  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }


  setTimeout(() => {
    setalert(null)
  }, 1000)

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const togle = (cls) => {
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);



    if (mode === 'light') {
      setmode('dark');
      setcolor('white');
      showAlert("Dark mode has been enable", 'success');
      settitleColor("danger");
      document.title = "Dark Mode" 

      // document.body.style.backgroundColor="black";
    }
    else {
      setmode('light');
      setcolor('dark');
      showAlert("Light mode has been enable", 'success');
      settitleColor("success");
      document.title = "Light Mode"
      // setInterval(() => {
      //   document.title = "Jitu"
      // }, 2000)
      // setInterval(() => {
      //   document.title = "Jitendra";

      // }, 3000)


      // document.body.style.backgroundColor="pink";
    }
  }
  return (
    <>
    <Router>
      {/* It is used when you pass no any props. */}
      {/* <Navbar/> */}

      

        <Navbar title="Textutils" title_color={titleColor} About="AboutTextUtils" mode={mode} toggle={togle} col={color} />
        <Alert alert={alert} />
        <div className="container my-3">

        
        
          <Routes>          
          
            <Route exact path="/Home" element={<TextForm heading=" Try TextUtils- Word counter , Character Counter , Convert UpperText to LowerText" showAlert={showAlert} title_color={titleColor} />}></Route>
            <Route  exact path='/About' element={<About mode={mode}  />}></Route>
          
          
          </Routes>

          {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} title_color={titleColor} /> */}

          {/* <About /> */}

        </div>
        </Router> 
    </>
  );
}

export default App;
