import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from "../components/Input";
import * as TodoActions from '../actions'
import SuggestionList from "../components/SuggestionList";
import { bindActionCreators } from 'redux'

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
          <div>
              <Input suggest_delay={1000} {...this.props.actions}/>
              <SuggestionList options={this.props.suggestions}/>
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
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
