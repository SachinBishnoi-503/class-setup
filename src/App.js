import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Card from './components/home/Card';

import './App.css';
import Hero from './components/home/Hero';
import Seacond from './components/view/Seacond';
import Added from './components/view/Added';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/card' element={<Card />} />
          <Route path='/seacond' element={<Seacond />} />
          <Route path='/added' element={<Added />} />
         
        </Routes>



      </BrowserRouter>


    </div>
  );
}

export default App;
