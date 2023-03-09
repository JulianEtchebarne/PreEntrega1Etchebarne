import { Navbar } from "./components/Navbar/Navbar";
import { Bienvenido } from "./components/Main/Bienvenido/Bienvenido";
import {
  ItemListContainer,
  Muestra,
} from "./components/Main/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Bienvenido greeting="AOLCC" />
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
