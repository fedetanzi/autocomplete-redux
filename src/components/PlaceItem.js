/**
 * Created by federuiz on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PlaceItem extends Component{

    static propTypes = {
        place: PropTypes.object.isRequired,
        onclick: PropTypes.func.isRequired
    };

    handleClick (){
        this.props.onclick(this.props.place);
    }
    render(){
        return(
            <li onClick={() => this.handleClick()}>
                <span>{this.props.place.title}</span>
                <br/>
                <span>{this.props.place.subTitle}</span>
            </li>
        )
    }
}

export default PlaceItem