import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSuggestion, fetchSuggestions } from '../actions'
import Input from "../components/Input";
import SuggestionList from "../components/SuggestionList";

class App extends Component {
  static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      suggestions: PropTypes.array.isRequired,
      lastUpdated: PropTypes.number,
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
  handleClick (){
    this.props.fetchSuggestions("libertad")
  }

  render() {
      return (
          <div>
              <button onClick={() => this.handleClick()}></button>
              <Input suggest_delay={1000} fetchSuggestions={this.props.fetchSuggestions}/>
              <SuggestionList options={this.props.suggestions}/>
          </div>
      )
  }
}

const mapStateToProps = state => {
return {
    isFetching: false,
    suggestions: state.suggestions.currentSuggestions
}
};

function mapDispatchToProps(dispatch){
    return {
        fetchSuggestions: (text) => {
            dispatch(fetchSuggestions(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
