import { Route, Routes } from "react-router-dom"
import DesktopNavbar from './components/DesktopNavbar';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Projects from './pages/Projects'; 
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <>
      <DesktopNavbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>

  );
}

export default App;
