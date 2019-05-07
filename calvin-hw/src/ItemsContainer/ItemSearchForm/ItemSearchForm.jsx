import React, {Component} from 'react';

class ItemSearchForm extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchItems(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        What item do you want? <input onChange = {this.handleChange} type="text" name="search" />
        <input type="submit" />
        </form>
    }
}

export default ItemSearchForm;