import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './PlaceDetails.css'
import {Col, Grid, Jumbotron, Row} from "react-bootstrap";
import FaArrow from 'react-icons/lib/fa/arrow-left';
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'

class DetailsPage extends Component {

    static propTypes = {
        place: PropTypes.shape(
            {
                title: PropTypes.string,
                subTitle: PropTypes.string,
                details: PropTypes.shape({
                        comuna: PropTypes.string,
                        barrio: PropTypes.string,
                        comisaria: PropTypes.string,
                        area_hospitalaria: PropTypes.string,
                        region_sanitaria: PropTypes.string,
                        distrito_escolar: PropTypes.string,
                        seccion_catastral: PropTypes.string,
                        distrito_economico: PropTypes.string,
                        codigo_de_planeamiento_urbano: PropTypes.string,
                        partido_amba: PropTypes.string,
                        localidad_amba: PropTypes.string
                    }
                )
            }
        )
    };

    handleClick(){
        this.props.actions.selectPlace(null);
    }

    render(){
        const title =
            <div>
                <Row>
                    <Col lg={1} className="vcenter arrow-item">
                        <FaArrow onClick={() => this.handleClick()} size={32} name='arrow-left'/>
                    </Col >
                    <Col lg={11} className="vcenter">
                        <h1>{this.props.place.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} lgOffset={1}>
                        <h3>{this.props.place.subTitle}</h3>
                    </Col>
                </Row>
            </div>
            ;

        let rows = [
            <Row key="datos">
                <Col lg={12} md={12}>
                    <h3>Datos de interes</h3>
                </Col>
            </Row>
        ];
        if (this.props.place.details) {
            const regex = new RegExp("_", 'g');
            for (let [k, v] of Object.entries(this.props.place.details)) {
                rows.push(
                    <Row key={k + v} className="detail-item">
                        <Col xs={6} md={6}>
                            <h4>{k.replace(regex, " ").split(" ").map((d) => d[0].toUpperCase() + d.substr(1, d.length)).join(" ")}:</h4>
                        </Col>
                        <Col xs={6} md={6}>
                            <h4 className="pull-right">{v}</h4>
                        </Col>
                    </Row>
                )
            }
        }
        else {
            rows.push(
                <Row>
                    <Col lg={10}>
                        <h4>No se han encontrado datos sobre el lugar</h4>
                    </Col>
                </Row>
            )
        }

        return(
            <div>
                <Grid >
                    {title}
                    <Row>
                        <Col lg={10} lgOffset={1}>
                            <Jumbotron>
                                {rows}
                            </Jumbotron>
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    place: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(DetailsPage)