import React, { Component } from 'react';
import classes from './Search.css';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
//import cities from '../../assests/data/cities';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';

class Search extends Component {
    state ={
        allCities: [],
        categories:[],
        content: false,
        catValueSelected: "",
        cityValueSelected: "",
        searchButtonClicked: false
    };

    catValueSelectedHandler = (val) => {
        console.log(val);
        this.setState({
            catValueSelected: val
        });
    }
    
    cityValueSelectedHandler = (val) => {
        console.log(val);
        this.setState({
            cityValueSelected: val
        });
    }


    onKeyPressHandler = (event) => {
        let userInput = event.target.value;
        //console.log(userInput);
        if(userInput.length ===1) {
            if(!this.state.content) {
                //console.log("sent");
                this.setState({
                    actioned: true
                });
                axios.get( '/cities/getcity/'+userInput)
                .then( response => {
                    this.setState({
                        allCities: response.data
                    });
                    //console.log('/cities/getcity/'+userInput);
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
    
    searchButtonHandler = () => {
        this.setState({
            searchButtonClicked: true
        });
        console.log(this.state.searchButtonClicked);
    }

    render () {
        /*var citiesArray;   //previous used for cities from file
        citiesArray = cities.map(element => {
                                return element.join(', ');
                            });*/
        var compo = (
            <Redirect to={'/searchResult?cat='+this.state.catValueSelected+'&city='+this.state.cityValueSelected}/>
        );

        if(this.state.searchButtonClicked) {
            compo = (<div>
                <Redirect to={'/searchResult/'+this.state.catValueSelected+'/'+this.state.cityValueSelected}/>
                </div>)
        }
        else {
            compo = (
                <div>
                    <div className={classes.Search}>
                        <div className={classes.SearchContainer}>
                            <h1>Search professionals nearby</h1>
                            <h3>Start your search below</h3>
                
                            <div className={classes.AutoCompleteContainer}>
                                <AutoComplete className={classes.AutoComplete}
                                    suggestions={this.state.categories}
                                    valueSelected={(val)=>this.catValueSelectedHandler(val)}
                                />
                                <AutoComplete className={classes.AutoComplete}
                                    suggestions={this.state.allCities}
                                    onKeyDownCapture={event => this.onKeyPressHandler(event)}
                                    valueSelected={(val)=>this.cityValueSelectedHandler(val)}
                                />
                                <input type="button" value="Search" onClick={this.searchButtonHandler} className={classes.Button}/>
                            </div>
                        </div>
                    </div>
                </div>
            )};

        return(
            compo
        );
    }
}

export default Search;