import {SELECT_PLACE, SAVE_SUGGESTION, RECEIVE_PLACE_DATA, DELETE_PLACE, REQUEST_PLACE_DATA} from '../constants/ActionTypes'

const places = (state = {myPlaces: [], selectedPlace: null, loadingData: false}, action) => {
    switch (action.type) {
        case SAVE_SUGGESTION:
            return {
                ...state,
                myPlaces: state.myPlaces.concat([action.suggestion]),
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
        default:
            return state
    }
};

export default places