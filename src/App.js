import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './Components/img/logo.png';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </header>
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="*" element={<div><h1>Esta Pagina No exite</h1></div>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <NavBar />
//         </header>
//         <main>
//           <ItemListContainer greeting="Bienvenidos a la Tienda Online" />
//         </main>
//       </div>