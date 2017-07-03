/**
 * Created by federicotanzi on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SuggestionItem extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        subTitle : PropTypes.string.isRequired
    };

    render(){
        return(
            <li>
                <span>{this.props.title}</span>
                <br/>
                <span>{this.props.subTitle}</span>
            </li>
        )
    }
}

export default SuggestionItem