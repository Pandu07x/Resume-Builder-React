


import Intro from "./components/intro";
import Education from "./components/education";
import Technical from "./components/technical";
import Experince from "./components/experince";
import Skills from "./components/skills";
import Course from "./components/Course";
import Project from "./components/projects";
import Language from "./components/Language";
import React,{useRef} from "react";
import ReactToPrint from "react-to-print";
function App() {
  const print=()=>{
    window.print()
  }

  return (
    <div className="container " style={{
        backgroundColor:"white"
    }}>
      <Intro />
      <div className="container" style={{
        fontSize:"medium"
      }}>
        <div className="row">
          <div className="col-sm-5">
            <Education />
            <Project />
            <Experince />

          </div>
          <div className="col-sm-5" style={{marginLeft:92}}>
            <Skills/>
            <br/>
            <br/>
            <Technical />
            <br/>
            <Course />
            <Language />


          </div>


        </div>


        <div className="row">
          <div className="col-sm-6">

          </div>

        </div>


<button onClick={print}>Print</button>

      </div>



    </div>
  );
}

export default App;
