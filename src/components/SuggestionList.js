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
        saveSuggestion: PropTypes.func.isRequired
    };
    handleClick(suggestion){
        this.props.saveSuggestion(suggestion);
    }
    render(){

        return(
            <div>
                <ul>
                    {
                        this.props.options.map(
                            (option) => {
                                return <SuggestionItem
                                    suggestion={option}
                                    key={option.title + "-" + option.subTitle}
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