import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from "../components/Input";
import * as Actions from '../actions'
import SuggestionList from "../components/SuggestionList";
import { bindActionCreators } from 'redux'
import {Col, Grid, Row} from "react-bootstrap";
import PlaceList from "../components/PlaceList";
import FaLoading from 'react-icons/lib/fa/circle-o-notch';
import style from './LandingPage.css';
import {PLACE_TYPE, STREET_TYPE} from "../constants/ActionTypes";


class LandingPage extends Component {

    static propTypes = {
        suggestions: PropTypes.array.isRequired,
        places : PropTypes.array.isRequired,
        lastUpdated: PropTypes.number,
        actions: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
        currentText: PropTypes.string.isRequired,
    };
    state = {
        showSuggestions : false,
        minLength: 2,
    };

    handleChange(value){
        this.setState({showSuggestions : value});
    }
    handleClick(){
        this.setState({showSuggestions : false});
    }

    render() {
        const showLoader = !this.props.loading ? {"display": "none"} : {};
        const errorMessage = !this.props.loading && this.props.suggestions.length === 0 && this.props.currentText.length > this.state.minLength ?
            <Row>
                <Col lg={12}>
                <label>Lo sentimos! No hemos encontrado resultados</label>
                </Col>
            </Row>
         : "";
         return (
            <div>
                <div className="input-div">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6} sm={12} lg={6}>
                                <Row>
                                    <Col lg={6} className="vcenter">
                                        <h1>Mis Lugares</h1>
                                    </Col>
                                    <Col lg={6} className="vcenter">
                                        <FaLoading size={32} className="my-spin pull-right" style={showLoader}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <Input
                                            change={(value) => this.handleChange(value)}
                                            text={this.props.currentText}
                                            length_query={this.state.minLength}
                                            suggest_delay_place={800}
                                            suggest_delay_street={400}
                                            fetchSuggestionsPlace={(value) => this.props.actions.fetchSuggestions(value, PLACE_TYPE)}
                                            fetchSuggestionsStreet={(value) => this.props.actions.fetchSuggestions(value, STREET_TYPE)}
                                            {...this.props.actions}
                                         />
                                        <div >
                                            <SuggestionList
                                                itemClick={() => {this.handleClick()}}
                                                showSuggestions={this.state.showSuggestions}
                                                options={this.props.suggestions}
                                                {...this.props.actions}
                                            />
                                        </div>
                                        {errorMessage}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} lg={6} sm={12}>
                                <PlaceList places={this.props.places} {...this.props.actions}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        suggestions: state.suggestions.currentSuggestions,
        currentText : state.suggestions.currentText,
        places: state.places.myPlaces,
        loading: Object.values(state.suggestions.loadingSuggesters).filter(d => d !== 0).length > 0 || state.places.loadingData,
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
