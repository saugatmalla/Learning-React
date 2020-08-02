import React from 'react';
import Area from './views/Measurements.js'


function App() {
  return (
    <div className="App">
      <div className="container mb-5">
        <div className="text-center">
          <h1 className="display-1">Convert</h1>
        </div>
        <header></header>
        <Area type="area" />
      </div>
    </div>
  );
}

export default App;
