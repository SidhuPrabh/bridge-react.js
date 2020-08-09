import React, { Component } from 'react';
import classes from './Search.css';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
//import cities from '../../assests/data/cities';
import axios from '../../axios';

class Search extends Component {
    state ={
        allCities: [],
        content: false
    };
    
    onKeyPressHandler = (event) => {
        let userInput = event.target.value;
        console.log(userInput);
        if(userInput.length ===1) {
            if(!this.state.content) {
                console.log("sent");
                this.setState({
                    actioned: true
                });
                axios.get( '/cities/getcity/'+userInput)
                .then( response => {
                    this.setState({
                        allCities: response.data
                    });
                    console.log('/cities/getcity/'+userInput);
                } )
                .catch( error => {
                    console.log( error );
                } );
            }
            this.setState({
                content: this.state.content ? false : true
            });
        }
    }

    componentDidMount() {
        axios.get( '/professionals/getcat')
                .then( response => {
                    this.setState({
                        categories: response.data
                    });
                } )
                .catch( error => {
                    console.log( error );
                } );
    }

    render () {
        /*var citiesArray;   //previous used for cities from file
        citiesArray = cities.map(element => {
                                return element.join(', ');
                            });*/
    
        return(
            <div className={classes.Search}>
                <div className={classes.SearchContainer}>
                    <h1>Search professionals nearby</h1>
                    <h3>Start your search below</h3>

                    <div className={classes.AutoCompleteContainer}>
                        <AutoComplete className={classes.AutoComplete}
                            suggestions={this.state.categories}
                        />
                        <AutoComplete className={classes.AutoComplete}
                            suggestions={this.state.allCities}
                            onKeyDownCapture={event => this.onKeyPressHandler(event)}
                        />
                        <input type="button" value="Search" className={classes.Button}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;