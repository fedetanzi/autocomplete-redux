import {SELECT_PLACE, SAVE_SUGGESTION, RECEIVE_PLACE_DATA, DELETE_PLACE} from '../constants/ActionTypes'

const places = (state = {myPlaces: [], selectedPlace: null}, action) => {
    switch (action.type) {
        case SAVE_SUGGESTION:
            return {
                ...state,
                myPlaces: state.myPlaces.concat([action.suggestion])
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
        default:
            return state
    }
};

export default places