
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import InputContact from "./Components/InputContact/InputContact";
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
          </Route>
        </Routes>  
      </div>
     
      </ScrollToTop>
    </BrowserRouter> 
   
  );
}



  
export default App;
