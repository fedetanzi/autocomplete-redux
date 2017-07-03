import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSuggestion, fetchSuggestions } from '../actions'
import Input from "../components/Input";

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
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
    this.props.dispatch(fetchSuggestions("fede"))
  }

  render() {
      return (
          <div>
            <button onClick={() => this.handleClick()}></button>
            <Input />
          </div>
      )
  }
}

const mapStateToProps = state => {
return {
  isFetching: false
}
};

export default connect(mapStateToProps)(App)
