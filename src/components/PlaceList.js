/**
 * Created by federuiz on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from "./PlaceItem";

class PlaceList extends Component{

    static propTypes = {
        places : PropTypes.array.isRequired,
        selectPlace: PropTypes.func.isRequired
    };

    handlePlaceClick (place){
        this.props.selectPlace(place);
    }

    render(){
            const placesView = this.props.places.map ((place, index) =>
                <PlaceItem place={place} key={index} onclick={() => this.handlePlaceClick(place)}/>
            );
            return(
                <div>
                    <ul>
                        {placesView}
                    </ul>
                </div>
            )
    }
}

export default PlaceList