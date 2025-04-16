import './App.css';
import { Header } from './components/Header.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import { Pokemon } from './pages/Pokemon.js'
import { Footer } from './components/Footer.js';
import { PokedexMode } from './pages/PokedexMode.js';
import TypePage from "./pages/TypePage.js"
import TypePageTypes from './pages/TypePageTypes.js';

function App() {
  return (
  <BrowserRouter>
    <Header /> 

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gen1/:id" element={<Pokemon />}/>
      <Route path="/pokédex/" element={<PokedexMode />}/>
      <Route path="/tipo" element={<TypePage />}/>
      <Route path="/tipo/:tipo" element={<TypePageTypes />}/>
      {/* <ItemListPokemon /> */} 
    </Routes>

    <Footer />
    
  </BrowserRouter>
  )
}

export default App;
