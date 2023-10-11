
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [inputData, setInputData] = useState('');

  const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories/1/products')
      .then(res => res.json())
      .then(json => setData(json))
  }, []);

  const handleInputChange = (data) => {
    setInputData(data);
  }
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home onInputChange={handleInputChange} />} />
        <Route path='/result' element={<Products inputData={inputData} data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
