/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SuggestionItem from "./SuggestionItem";

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
                                    subtitle={option.subtitle}
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