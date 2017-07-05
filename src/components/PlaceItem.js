import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import FaArrow from 'react-icons/lib/fa/angle-right';
import FaTrash from 'react-icons/lib/fa/trash-o';

class PlaceItem extends Component{

    static propTypes = {
        place: PropTypes.object.isRequired,
        onclick: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
    };

    handleClick (){
        this.props.onclick(this.props.place);
    }
    handleDeleteClick (){
        this.props.delete(this.props.place);
    }
    render(){
        return(
            <div>
                <li onClick={() => this.handleClick()} className="place-item">
                    <Row>
                        <Col lg={10} md={8} sm={10} xs={8} className="vcenter">
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h5>{this.props.place.title}</h5>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <p>{this.props.place.subTitle}</p>
                            </Col>
                        </Col>
                        <Col lg={2} md={4} sm={2} xs={4} className="vcenter">
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <FaTrash onClick={(e) => {e.stopPropagation(); this.handleDeleteClick()}} size={32} className="delete-icon"/>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <FaArrow size={32} className="arrow-icon"/>
                            </Col>
                        </Col>

                    </Row>
                    <Row>
                    </Row>
                </li>
                <hr/>
            </div>
        )
    }
}

export default PlaceItem