/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SuggestionItem from "./SuggestionItem";
import styles from './SuggestionList.css'

class SuggestionList extends Component{

    static propTypes = {
        options : PropTypes.array.isRequired
    };

    render(){

        return(
            <div>
                <ul>
                    {
                        this.props.options.map(
                            (option) => {
                                return <SuggestionItem
                                    title={option.title}
                                    subTitle={option.subTitle}
                                    key={option.title + "-" + option.subTitle}
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