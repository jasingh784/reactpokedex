import React from 'react';
import './App.css';
import PokemonImage from './components/PokemonImage';
import StatsComponent from './components/StatsComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://pokeapi.co/api/v2/pokemon/',
      currentPokemonNum: 1,
      totalNumOfPokemon: 893,
      error: null,
      isLoaded: false,
      pokemon: {}
    };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }

  handleClickNext() {
    if(this.state.currentPokemonNum < this.state.totalNumOfPokemon) {
      this.setState((state) => ({
        currentPokemonNum: state.currentPokemonNum + 1
      }));
    } else {
      this.setState((state) => ({
        currentPokemonNum: state.totalNumOfPokemon
      }));
    }
  }

  handleClickPrev() {
    console.log(this.state);
    if(this.state.currentPokemonNum === 1) {
      this.setState((state) => ({
        currentPokemonNum: 1
      }));
    } else {
      this.setState((state) => ({
        currentPokemonNum: state.currentPokemonNum - 1
      }));
    }
  }

  componentDidMount() {
    let queryUrl = this.state.baseUrl + this.state.currentPokemonNum;
    console.log(queryUrl)
    fetch(queryUrl) //call the api url
      .then(res => res.json())                        //make the response into json
      .then((result) => {                       // if all is good, set state
        this.setState({                       
          isLoaded: true,
          pokemon: result
        });
      }, (error) => {                         //if something went wrong
        this.setState({                       //set state with error code
          isLoaded: true,
          error: error
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPokemonNum !== this.state.currentPokemonNum) {
      let queryUrl = this.state.baseUrl + this.state.currentPokemonNum;
      console.log(queryUrl)
      fetch(queryUrl) //call the api url
        .then(res => res.json())                        //make the response into json
        .then((result) => {                       // if all is good, set state
          this.setState({                       
            isLoaded: true,
            pokemon: result
          });
        }, (error) => {                         //if something went wrong
          this.setState({                       //set state with error code
            isLoaded: true,
            error: error
          });
        })
      }
  }

  render() {
    const {error, isLoaded, pokemon} = this.state;
    if(error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <div className="visuals">
            <PokemonImage image = {pokemon.sprites} />
            <button className="button" onClick={this.handleClickPrev}>Prev</button>
            <button className="button" onClick={this.handleClickNext}>Next</button>
          </div>
          <StatsComponent className="statsVisuals"
            name={this.state.pokemon.species.name}
            types={this.state.pokemon.types}
            
            />
        </div>
      )
    }

  }
}

export default App;
