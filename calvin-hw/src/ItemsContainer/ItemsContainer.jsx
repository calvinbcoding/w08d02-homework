import React, { Component } from 'react';
import ItemSearchForm from './ItemSearchForm/ItemSearchForm';

class ItemsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        this.searchItems({search: ""});
    }
    searchItems = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/item?search=${formData.search}`;
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            items: parsedResult.results.filter(item => item.name !== 'unknown')
        })
    }
    render(){
        const itemsList = this.state.items.map((item)=>{
            return(<div key={"results"}>
                <h5>{item.name}</h5>
                <p>It is a {item.name}</p>
            </div>)
        })
        return <div>
            <h2>Items container!!!</h2>
            <ItemSearchForm searchItems={this.searchItems}></ItemSearchForm>
            {itemsList}
        </div>
    }
}

export default ItemsContainer;