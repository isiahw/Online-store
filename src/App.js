import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './components/catalog.jsx';
import About from './pages/about.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<home />} />
        <Route path='/home' element={<home />} />
        <Route path='/catalog' element={ <Catalog />} />
        <Route path='/about' element={ <About />} />
      </Routes>

      <Catalog></Catalog>
      <About></About>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;