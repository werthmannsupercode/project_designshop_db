import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddNewItem from './components/AddNewItem';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNewItem" element={<AddNewItem />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
