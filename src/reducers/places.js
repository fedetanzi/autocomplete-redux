import {SELECT_PLACE, SAVE_SUGGESTION, RECEIVE_PLACE_DATA, DELETE_PLACE, REQUEST_PLACE_DATA} from '../constants/ActionTypes'
import {REHYDRATE} from 'redux-persist/constants'

const places = (state = {myPlaces: [], selectedPlace: null, loadingData: false}, action) => {
    switch (action.type) {
        case SAVE_SUGGESTION:
            return {
                ...state,
                myPlaces: [action.suggestion].concat(state.myPlaces),
                loadingData: false,
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: action.selectedPlace,
            };
        case DELETE_PLACE:

            return {
                ...state,
                myPlaces: state.myPlaces.filter (place => place !== action.selectedPlace),
            };
        case RECEIVE_PLACE_DATA:
            return {
                ...state,
                selectedPlace: action.selectedPlace,
            };
        case REQUEST_PLACE_DATA:
            return {
                ...state,
                loadingData: true,
            };
        case REHYDRATE:
            let incoming = action.payload.places;
            if (incoming) return {...state, ...incoming, loadingData: false};
            return state;
        default:
            return state
    }
};

export default places