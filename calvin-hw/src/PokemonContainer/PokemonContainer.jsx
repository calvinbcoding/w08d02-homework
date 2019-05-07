import React, { Component } from 'react';
import PokemonSearchForm from './PokemonSearchForm/PokemonSearchForm';

class PokemonContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokemon: []
        }
    }
    componentDidMount(){
        this.searchPokemon({search: ""});
    }
    searchPokemon = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/pokemon?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            pokemon: parsedResult.results.filter(pokemon => pokemon.name)
        })
    }
    render(){
        const pokemonList = this.state.pokemon.map((pokemon)=>{
            return(<div key={pokemon.name}>
                <h5>{pokemon.name}</h5>
                <p>It is a {pokemon.name}</p>
            </div>)
        })
        return <div>
            <h2>Pokemon container!!!</h2>
            <PokemonSearchForm searchPokemon={this.searchPokemon}></PokemonSearchForm>
            {pokemonList}
        </div>
    }
}

export default PokemonContainer;