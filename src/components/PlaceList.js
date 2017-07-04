/**
 * Created by federuiz on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlaceList extends Component{

    static propTypes = {
        places : PropTypes.array.isRequired
    };

    render(){
        return(
            <div>
                <ul>
                    {this.props.places}
                </ul>
            </div>
        )
    }
}

export default PlaceList