import logo from './Components/Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Bienvenidos a la Tienda Online"/>
      </main>
    </div>
  );
}

export default App;
