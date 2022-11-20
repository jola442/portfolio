import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/DesktopNavbar';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Projects from './pages/Projects'; 
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <>
    {/* CSS toggles what navbar shows (mobile or desktop) */}
      <Navbar />
      <MobileNavbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
