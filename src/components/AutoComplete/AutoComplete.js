import React, { Component } from 'react';
import classes from './AutoComplete.css';
//import PropTypes from 'prop-types';

export class AutoComplete extends Component {
  //static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    };
  }

  static defaultProperty={
    suggestions: []
  };

  render(){

    const onClick = (e) => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };

    const onKeyDown = (e) => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };

      const onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const regex = new RegExp('^' + userInput, 'i');
    
        const filteredSuggestions = suggestions.filter(
          (suggestion) =>
            regex.test(suggestion)
        );

        /*const filteredSuggestions = suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );*/
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: filteredSuggestions,
          showSuggestions: true,
          userInput: userInput
        });
      };

    let suggestionsListComponent;
    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul>
            {this.state.filteredSuggestions.map((suggestion, index) => {
              return (
                <li  key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div>
            <em>No suggestions!</em>
          </div>
        );
      }
    }


    return (
       <div className={classes.AutoComplete}>
         <input className={classes.Input}
           type="text"
           onChange={onChange}
           onKeyDownCapture={this.props.onKeyDownCapture}
           onKeyDown={onKeyDown}
           value={this.state.userInput}
         />
         {suggestionsListComponent}
       </div>
     );
 };
 
}
export default AutoComplete;