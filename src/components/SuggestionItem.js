/**
 * Created by federicotanzi on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SuggestionItem extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        subtitle : PropTypes.string.isRequired
    };

    render(){
        return(
            <li>
                <span>{this.props.title}</span>
                <span>{this.props.subtitle}</span>
            </li>
        )
    }
}

export default SuggestionItem