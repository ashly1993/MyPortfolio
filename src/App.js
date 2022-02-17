
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import ProjectPlan from './Components/ProjectPlan/ProjectPlan';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project_plan" element={<ProjectPlan />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
