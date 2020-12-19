//import logo from '../logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            types:[]
        }
    }

    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/type/";
        axios.get(url)
            .then((response)=>{
                this.setState({
                    types: response.data.results
                })
            })
            .catch((error)=>console.log(error))
    }

    renderItems(){
        return this.state.types.map((type)=>(
            <li>{type.name}   </li>
        ));
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1>Pokemon Types</h1>
                    <ul>
                        {this.renderItems()}
                    </ul>
                </header>

            </div>
        );
    }
}

export default App;
