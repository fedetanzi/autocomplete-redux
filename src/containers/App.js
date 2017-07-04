import React, {Component} from 'react'
import { connect } from 'react-redux'
import LandingPage from "./LandingPage";
import DetailsPage from "../containers/DetailsPage";
import PropTypes from 'prop-types'

class App extends Component {

    static propTypes = {
        selectedPlace: PropTypes.object,
    };
    render() {

        return (
            <div className="container">
                {!!this.props.selectedPlace ? <DetailsPage /> : <LandingPage />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {  selectedPlace: state.places.selectedPlace }
}

export default connect(mapStateToProps)(App)

