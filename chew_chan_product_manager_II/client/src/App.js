import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
// import ProductForm from "./components/ProductForm";
// import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import OneProduct from "./components/OneProduct";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path= "/product/:id" element ={<OneProduct/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
