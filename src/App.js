import { Route, Routes } from "react-router-dom"
import DesktopNavbar from './components/DesktopNavbar';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Projects from './pages/Projects'; 
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <>
    {/* CSS toggles what navbar shows (mobile or desktop) */}
      <DesktopNavbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </>

  );
}

export default App;
