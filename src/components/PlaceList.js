/**
 * Created by federuiz on 7/3/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from "./PlaceItem";
import {Col, Row} from "react-bootstrap";
import style from './PlaceList.css';

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
            const displayOptions = this.props.places.length === 0 ? {"display": "none"} : {};
            return(
                <Row className="place-list" style={displayOptions}>
                    <Col lg={12} className="no-padding">
                        <ul>
                            {placesView}
                        </ul>
                    </Col>
                </Row>
            )
    }
}

export default PlaceList