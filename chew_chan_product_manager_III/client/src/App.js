import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import OneProduct from "./components/OneProduct";
import Main from "./views/Main";
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path= "/oneproduct/:id" element ={<OneProduct/>} />
          <Route path="/edit/:id" element ={<Update/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
