import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contact from './components/Contact';
import Projects from './components/Projects'; 

function App() {
  return (
    <>
      <Navbar />
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
