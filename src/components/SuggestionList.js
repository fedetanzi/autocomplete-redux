/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SuggestionItem from "./SuggestionItem";
import styles from './SuggestionList.css'

class SuggestionList extends Component{

    static propTypes = {
        options : PropTypes.array.isRequired,
        saveSuggestion: PropTypes.func.isRequired,
        showSuggestions: PropTypes.bool.isRequired,
        itemClick: PropTypes.func.isRequired,
    };

    handleClick(suggestion){
        this.props.saveSuggestion(suggestion);
        this.props.itemClick();
    }

    render(){
        const showSuggestions = this.props.options.length !== 0 && this.props.showSuggestions;
        const divStyle = showSuggestions ? {} : {"display": "none"};
        return(
            <div className="suggestions-div" style={divStyle}>
                <ul>
                    {
                        this.props.options.map((option, index) => {
                                return <SuggestionItem
                                    suggestion={option}
                                    key={index}
                                    click={(suggestion) => this.handleClick(suggestion)}
                                />
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default SuggestionList