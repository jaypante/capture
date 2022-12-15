import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Ourwork from "./pages/Ourwork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <Nav/>

    <Routes>
      
    <Route path="/" exact element={<AboutUs/>}/>
        
      <Route path="/work" element={<Ourwork/>} />
      <Route path="/contact" element={<ContactUs/>} />

    </Routes>
   
    </div>
    
  );
}

export default App;
