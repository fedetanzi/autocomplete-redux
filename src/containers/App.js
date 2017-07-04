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
            <div>
                {!!this.props.selectedPlace ? <DetailsPage /> : <LandingPage />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {  selectedPlace: state.places.present.selectedPlace }
}

export default connect(mapStateToProps)(App)

