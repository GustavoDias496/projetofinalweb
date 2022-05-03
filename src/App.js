import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CadastroSaidas from "./pages/CadastroSaidas";
import CadastroEntradas from "./pages/CadastroEntradas";
import Historico from "./pages/Historico";

import EditEntrada from "./pages/EditEntrada";
import EditSaida from "./pages/EditSaida";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/Historico" element={<Historico/>}/>
          <Route path="/CadastroSaidas" element={<CadastroSaidas/>}/>
          <Route path="/CadastroEntradas" element={<CadastroEntradas/>}/>
          <Route path="/EditEntrada/:id" element={<EditEntrada/>}/>
          <Route path="/EditSaida/:id" element={<EditSaida/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
