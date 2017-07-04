/**
 * Created by federicotanzi on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SuggestionItem extends Component{

    static propTypes = {
        suggestion: PropTypes.object.isRequired,
        click: PropTypes.func.isRequired,
    };

    handleClick(){
        this.props.click(this.props.suggestion);
    }
    render(){
        return(
            <li onClick={() => this.handleClick()}>
                <span>{this.props.suggestion.title}</span>
                <br/>
                <span>{this.props.suggestion.subTitle}</span>
            </li>
        )
    }
}

export default SuggestionItem