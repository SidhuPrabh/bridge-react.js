import React, { Component } from 'react';
import classes from './SearchResults.css';
import Img from '../../components/UI/Img/Img';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios';
//import queryString from 'querystring';


class SearchResult extends Component {

    state ={
        proArr: [],
        content: false,
        catValueSelected: "",
        cityValueSelected: "",
        searchButtonClicked: false
    };

    componentDidMount() {
        //let params = queryString.parse(this.props.location.search);
        //console.log(this.props.match.params);
        if(this.props.match.params.city !== "" && this.props.match.params.cat !== ""){
            console.log('/professionals/search?cat='+this.props.match.params.cat
            +'&city='+this.props.match.params.city);
            axios.get( '/professionals/search?cat='+this.props.match.params.cat
            +'&city='+this.props.match.params.city)
                .then( response => {
                    this.setState({
                        proArr: response.data
                    });
                console.log(response.data);
                } )
                .catch( error => {
                    console.log( error );
                } );
        }
    }
    render() {

        let list = this.state.proArr.map(pro => (
                <div className={classes.CardDiv} key={pro.businessName}>
                    <div className={classes.LogoContainerDiv}>
                        <Img cssType="logoThumbnail" src={pro.logoURL} alt='logo'/>
                    </div>
                    <div className={classes.BNameContainerDiv}>
                        <p>{pro.businessName}</p>
                    </div>
                    <div className={classes.AddressContainerDiv}>
                        <p>{pro.address} {pro.city} {pro.postcode}</p>
                    </div>
                    <div className={classes.QuoteContainerDiv}>
                        <p>
                            Get Quote
                        </p>
                    </div>
                    <div className={classes.RatingContainerDiv}>
                        Rating...
                    </div>
                    <div className={classes.ButtonContainerDiv}>
                        <div className={classes.ButtonDiv}>
                            <Button cssType="ButtonCard" value="View Website"/>
                        </div>
                        <div className={classes.ButtonDiv}>
                            <Button cssType="ButtonCard" value="View Contact"/>
                        </div>
                    </div>
                </div>
        )
        );

        return (
            <div className={classes.MainDiv}>
                {list}
            </div>
        );
    }
}

export default SearchResult;