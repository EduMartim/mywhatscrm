import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaClientes from "./pages/ListaClientes";
import ListaImoveis from "./pages/ListaImoveis";
import ListaInteracoes from "./pages/ListaInteracoes";
import ListaTarefas from "./pages/ListaTarefas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Página inicial</div>} />
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/imoveis" element={<ListaImoveis />} />
        <Route path="/interacoes" element={<ListaInteracoes />} />
        <Route path="/tarefas" element={<ListaTarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
