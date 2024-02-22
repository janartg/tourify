import logo from './logo.svg';
import './App.css';
import { HomePages } from './pages/HomePages';
import { Login } from './pages/Login';
import { Routes, Route } from "react-router-dom";
import { About } from './pages/About';
import { TourPackage } from './pages/TourPackage';
import { DetailPackage2 } from './pages/DetailPackage2';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePages/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/tour-package" element={<TourPackage/>} />
      <Route path="/tour-package/:tourPackageId" element={<DetailPackage2/>} />

      
      
    </Routes>
 
   </>
  );
 
        
      
    
 
}

export default App;
