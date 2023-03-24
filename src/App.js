import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);


  useEffect(() => {
    getAllStarships().then(response=>{
      return response.json()
    }).then(data=>{
      setStarships(data.results);
      console.log(data.results);
      
    }) 
  

  }, [])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
