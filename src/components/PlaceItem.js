/**
 * Created by federuiz on 7/3/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import FaArrow from 'react-icons/lib/fa/angle-right';



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
            <div>
                <li onClick={() => this.handleClick()} className="place-item">
                    <Row>
                        <Col lg={11}>
                            <h5>{this.props.place.title}</h5>
                        </Col>
                        <Col lg={1}>
                            <FaArrow size={32} className="arrow-icon"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={11}>
                            <p>{this.props.place.subTitle}</p>
                        </Col>
                    </Row>
                </li>
                <hr/>
            </div>
        )
    }
}

export default PlaceItem