/* 
REMEMBER TO TYPE "npm i react-router-dom@6" IN THE 
TERMINAL TO ALLOW ROUTER FUNCTIONALITY TO APPLICATION
BEFORE USING "npm start" !!!!
*/
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact Us!</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
