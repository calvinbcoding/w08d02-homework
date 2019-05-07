import React, { Component } from 'react';
import MoveSearchForm from './MoveSearchForm/MoveSearchForm';

class MovesContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            moves: []
        }
    }
    componentDidMount(){
        this.searchMoves({search: ""});
    }
    searchMoves = async (formData) => {
        const searchURL = `"https://pokeapi.co/api/v2/move?search="${formData.search}`;
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            moves: parsedResult.results.filter(move => move.name !== 'unknown')
        })
    }
    render(){
        const movesList = this.state.moves.map((move)=>{
            return(<div key={"results"}>
                <h5>{move.name}</h5>
                <p>It is a {move.name}</p>
            </div>)
        })
        return <div>
            <h2>Moves container!!!</h2>
            <MoveSearchForm searchMoves={this.searchMoves}></MoveSearchForm>
            {movesList}
        </div>
    }
}

export default MovesContainer;