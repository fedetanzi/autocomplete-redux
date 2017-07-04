import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {Col, Grid, Row} from "react-bootstrap";

class DetailsPage extends Component {

    static propTypes = {
        canUndo : PropTypes.bool.isRequired,
        selectedPlace: PropTypes.shape(
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
        ),
        onUndo: PropTypes.func.isRequired
    };

    render(){
        return(
            <div>
                <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>
                    Undo
                </button>
                <h1>{this.props.selectedPlace.title}</h1>
                <br/>
                <h3>{this.props.selectedPlace.subTitle}</h3>
                <Grid>
                    <Row>
                        <Col xs={6} md={6}>
                            <ul>
                                <li>
                                    <h4>Comuna</h4>
                                </li>
                                <li>
                                    <h4>Barrio</h4>
                                </li>
                                <li>
                                    <h4>Comisaria</h4>
                                </li>
                                <li>
                                    <h4>Area Hospitalaria</h4>
                                </li>
                                <li>
                                    <h4>Region Sanitaria</h4>
                                </li>
                                <li>
                                    <h4>Distrito Escolar</h4>
                                </li>
                                <li>
                                    <h4>Seccion Catastral</h4>
                                </li>
                                <li>
                                    <h4>Distrito Economico</h4>
                                </li>
                                <li>
                                    <h4>Codigo de Planeamiento Urbano</h4>
                                </li>
                                <li>
                                    <h4>Partido Amba</h4>
                                </li>
                                <li>
                                    <h4>Localidad Amba</h4>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={6} md={6}>
                            <ul>
                                <li>
                                    <h4>{this.props.selectedPlace.details.comuna}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.barrio}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.comisaria}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.area_hospitalaria}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.region_sanitaria}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.distrito_escolar}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.seccion_catastral}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.distrito_economico}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.codigo_de_planeamiento_urbano}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.partido_amba}</h4>
                                </li>
                                <li>
                                    <h4>{this.props.selectedPlace.details.localidad_amba}</h4>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    canUndo: state.places.past.length > 0,
    selectedPlace: state.places.present.selectedPlace
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)