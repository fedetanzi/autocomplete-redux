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


class LandingPage extends Component {

    static propTypes = {
        suggestions: PropTypes.array.isRequired,
        places : PropTypes.array.isRequired,
        lastUpdated: PropTypes.number,
        actions: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
    };
    state = {
        showSuggestions : false,
    };
    handleChange(){
        this.setState({showSuggestions : true});
    }
    handleClick(){
        this.setState({showSuggestions : false});
    }
    render() {
        const showLoader = !this.props.loading ? {"display": "none"} : {};
        return (
            <div>
                <div className="input-div">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6} sm={12}>
                                <Row>
                                    <Col lg={6} className="vcenter">
                                        <h1>Mis Lugares</h1>
                                    </Col>
                                    <Col lg={6} className="vcenter">
                                        <FaLoading size={32} className="my-spin pull-right" style={showLoader}/>
                                    </Col>
                                </Row>
                                <Input change={() => this.handleChange()} length_query={2} suggest_delay_place={800} suggest_delay_street={400} {...this.props.actions}/>
                                <div >
                                    <SuggestionList itemClick={() => {this.handleClick()}} showSuggestions={this.state.showSuggestions} options={this.props.suggestions} {...this.props.actions}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6} sm={12}>
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
        loading: Object.values(state.suggestions.loadingSuggesters).includes(true) || state.places.loadingData,
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
