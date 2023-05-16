import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  
    useEffect(() => {
      axios ({
        url: 'https://api.spoonacular.com/recipes/findByIngredients',
        method: 'GET',
        dataResponse: 'json',
        params: {
          apiKey: '434692a1f35a4107addf9b830c5d7a39',
          ingredients: 'tomato,eggs,cheese',
          number: 20,
          ranking: 1
        },
      }).then((response) => {
        console.log(response);
      })
    }, []);
}

export default App;
