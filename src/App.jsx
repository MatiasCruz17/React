import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import Inicio from './pages/Inicio/inicio';
function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Filtrando por categoria"/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
    </div>
  );
}

export default App
