import React, { useEffect } from 'react';
import './App.scss';

function App() {

  console.log("App JS")

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, [])

  return (
    <div className="App">
      <h1>Knowledgebase App</h1>
    </div>
  );
}

export default App;
