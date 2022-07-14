import React from 'react';
import './App.css';


function App() {
  const names = [
    {id: 1, name: "First"},
    {id: 2, name: "Second"},
    {id: 3, name: "Third"},
    {id: 4, name: "Fours"},
    {id: 5, name: "Fifths"}
  ];
  const liElement = names.map((n, index) => <div key={index}>
    <li>{n.name}</li>
  </div>)
  return (
    <div className="App">
      <ul>
        {liElement}
      </ul>
    </div>
  );
}

export default App;
