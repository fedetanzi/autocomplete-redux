import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from "../components/Input";
import * as Actions from '../actions'
import SuggestionList from "../components/SuggestionList";
import { bindActionCreators } from 'redux'

import style from './App.css'
import {Col, Grid, Row} from "react-bootstrap";

class App extends Component {
  static propTypes = {
      suggestions: PropTypes.array.isRequired,
      lastUpdated: PropTypes.number,
      actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props;
    // dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.selectedReddit !== this.props.selectedReddit) {
    //   const { dispatch, selectedReddit } = nextProps;
    //   dispatch(fetchPostsIfNeeded(selectedReddit))
    // }
  }

  render() {
      return (
          <div className="container">
              <div className="input-div">
                  <Grid>
                      <Row className="show-grid">
                          <Col xs={6} md={6}>
                              <h1>Mis Lugares</h1>
                              <Input suggest_delay={1000} {...this.props.actions}/>
                              <div >
                                  <SuggestionList options={this.props.suggestions} {...this.props.actions}/>
                              </div>
                          </Col>
                          <Col xs={6} md={6}>
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
        currentText : state.suggestions.currentText
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
