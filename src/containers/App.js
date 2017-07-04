import React, {Component} from 'react'
import { connect } from 'react-redux'
import LandingPage from "./LandingPage";
import PlaceDetails from "../components/PlaceDetails";
import PropTypes from 'prop-types'

class App extends Component {

    static propTypes = {
        selectedPlace: PropTypes.object,
    };
    render() {

        return (
            <div>
                {!!this.props.selectedPlace ? <PlaceDetails /> : <LandingPage />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {  selectedPlace: state.places.selectedPlace }
}

export default connect(mapStateToProps)(App)

