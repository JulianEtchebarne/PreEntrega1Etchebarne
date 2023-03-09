import "./Navbar.scss";
import { CartWidget } from "./CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header>
      <div className="header_container">
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Catálogo</a>
          <a href="#">Tabaquería</a>
          <div className="logo_container">
            <img src="logo512.png" alt="Logo" />
          </div>
          <a href="#">Coctelería</a>
          <a href="#">Puntos de venta</a>
          <a href="#">Contacto</a>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};
