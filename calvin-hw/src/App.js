import React, {Component} from 'react';
import PokemonContainer from './PokemonContainer/PokemonContainer';
import ItemsContainer from './ItemsContainer/ItemsContainer';
import MovesContainer from './MovesContainer/MovesContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenPage: null
    }
  }
  changePage = (e) => {
    console.log(e.target.id);
    this.setState({
      chosenPage: e.target.id
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.changePage} id="moves">Show me the moves!!!</button>
        <button onClick={this.changePage} id="items">Show me the Items!!!</button>
        <button onClick={this.changePage} id="pokemon">Show me the Pokemon!!!</button>
        {
          this.state.chosenPage === null ?
            null
            :
            this.state.chosenPage === "moves" ?
              <MovesContainer></MovesContainer>
              :
              this.state.chosenPage === "items" ?
                <ItemsContainer></ItemsContainer>
                :
                <PokemonContainer></PokemonContainer>
        }
      </div>
    );
  }
}

export default App;

