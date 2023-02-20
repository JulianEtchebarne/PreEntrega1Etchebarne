import { Navbar } from './components/Navbar/Navbar';
import { Bienvenido } from './components/Main/Bienvenido/Bienvenido';
import { Muestra } from './components/Main/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div>
        <Navbar />
        <main>
          <Bienvenido greeting="AOLCC" />
          <Muestra/>
        </main>
      </div> 
  );
}

export default App;
