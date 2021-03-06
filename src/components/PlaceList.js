import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from "./PlaceItem";
import style from './PlaceList.css';

class PlaceList extends Component{

    static propTypes = {
        places : PropTypes.array.isRequired,
        selectPlace: PropTypes.func.isRequired,
        deletePlace: PropTypes.func.isRequired,
    };

    handlePlaceClick (place){
        this.props.selectPlace(place);
    }
    handleDeleteClick (place){
        this.props.deletePlace(place);
    }
    render(){
            const displayOptions = this.props.places.length === 0 ? {"display": "none"} : {};
            return(
                <div className="place-list" style={displayOptions}>
                    <ul>
                        {this.props.places.map ((place, index) =>
                            <PlaceItem place={place} key={index} onclick={() => this.handlePlaceClick(place)} delete={() => this.handleDeleteClick(place)}/>
                        )}
                    </ul>
                </div>
            )
    }
}

export default PlaceList