import Header from './components/Header';
import Form from './components/Form';
import Gallery from './components/Gallery'
import './App.css';




function App() {
  // const [recipes, setRecipes] = useState([]);
  // useEffect((getRecipes, number) => {
  //   axios({
  //     url: 'https://api.spoonacular.com/recipes/random',
  //     method: 'GET',
  //     dataResponse: 'json',
  //     params: {
  //       apiKey: '6540b4ba6dce481f87d862fb58adc153',
  //       number: 10,
  //       limitLicense: true,
  //     },
  //   }).then((response) => {
  //     console.log(response)
  //     setRecipes(response.data.recipes)
  //   })
  // }, []);

  // const getRecipes = (event, noOfRecipes) => {
  //   event.preventDefault()
  //   let number = parseInt(noOfRecipes, 10)
  // }
    return (
      <main>
        <Header />
        {/* <Form getRecipes={getRecipes}/> */}
        <Gallery />
      </main>
    )
}

export default App;
