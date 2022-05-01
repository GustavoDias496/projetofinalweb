import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CadastroSaidas from "./pages/CadastroSaidas";
import CadastroEntradas from "./pages/CadastroEntradas";
import Historico from "./pages/Historico";

import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Historico" element={<Historico/>}/>
          <Route path="/CadastroSaidas" element={<CadastroSaidas/>}/>
          <Route path="/CadastroEntradas" element={<CadastroEntradas/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
