import React from 'react'
import Filter from './components/Filter';
import Navbar from './components/Navbar'
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="row">
        <div class="col-md-9">
         <Filter /> 
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 bg-warning"><Products /></div>
        </div>
        <div class="col-md-3">
          <Cart />
        </div>
        
      </div>
    </div>
  );
}

export default App;
