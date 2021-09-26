import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './globalStyles';
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import DropBar from "./components/DropBar";
import { useState } from "react";
import Information from "./components/Information";
import { InformationData } from "./data/InformationData";

function App() {

  const [open, setOpen] = useState(false);
  const view = () => {
    setOpen(!open)
  }
  return (
    <Router>
      <>
      <GlobalStyle/>
    
        <Navbar view={view} />
        <DropBar open={open} view={view}/>
        <Hero slides={SliderData} />
        <Information {...InformationData}/>
      </>
      </Router>
  );
}

export default App;
