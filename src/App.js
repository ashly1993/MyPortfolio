
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './Components/Home/Home';
import InputContact from "./Components/InputContact/InputContact";
import Fun_Corner from './Components/Fun_Corner/Fun_Corner';
import ScrollToTop from "./ScrollToTop";




function App() {
  return (

    <BrowserRouter>
     
     <ScrollToTop >
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="input_form" element={<InputContact />} /> 
            <Route path="fun_corner" element={<Fun_Corner/>} />
            {/* <Route exact path="/public/spaceman.html"/> */}
            <Route exact path="spaceman" render={() => {window.location.href="/public/spaceman.html"}} />
            {/* <Route exact path="/terminos" render={() => {window.location.href="terminos.html"}} /> */}
              
          </Route>
        </Routes>  
      </div>
     
      </ScrollToTop>
    </BrowserRouter> 
   
  );
}



  
export default App;
