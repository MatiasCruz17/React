import './App.css'
import Navbar from'./componentes/navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/itemListContainer'
function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = "¡Binvenidos a RepuestoSyS!" />
      <h3>El after me sirvio un montonaso</h3>
    </div>
  );
}

export default App
