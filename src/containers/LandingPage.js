import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from "../components/Input";
import * as Actions from '../actions'
import SuggestionList from "../components/SuggestionList";
import { bindActionCreators } from 'redux'
import {Col, Grid, Row} from "react-bootstrap";
import PlaceList from "../components/PlaceList";

class LandingPage extends Component {

    static propTypes = {
        suggestions: PropTypes.array.isRequired,
        places : PropTypes.array.isRequired,
        lastUpdated: PropTypes.number,
        actions: PropTypes.object.isRequired
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
        return (
            <div>
                <div className="input-div">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                <h1>Mis Lugares</h1>
                                <Input change={() => this.handleChange()} suggest_delay={1000} {...this.props.actions}/>
                                <div >
                                    <SuggestionList itemClick={() => {this.handleClick()}} showSuggestions={this.state.showSuggestions} options={this.props.suggestions} {...this.props.actions}/>
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
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
        places: state.places.myPlaces
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
