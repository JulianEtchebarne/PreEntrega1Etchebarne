import { Navbar } from "./components/Navbar/Navbar";
import { Bienvenido } from "./components/Main/Bienvenido/Bienvenido";
import { ItemListContainer } from "./components/Main/ItemListContainer/ItemListContainer";
import Catalogo from "./components/Catalogo/Catalogo";
import Cocteleria from "./components/Cocteleria/Cocteleria";
import Contacto from "./components/Contacto/Contacto";
import PuntosDeVenta from "./components/Puntos de Venta/PuntosDeVenta";
import Tabaqueria from "./components/Tabaqueria/Tabaqueria";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Bienvenido greeting="AOLCC" />} />
        <Route path="/catalogo/" element={<Catalogo />} />
        <Route path="/catalogo/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cocteleria" element={<Cocteleria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/puntosdeventa" element={<PuntosDeVenta />} />
        <Route path="/tabaqueria" element={<Tabaqueria />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
