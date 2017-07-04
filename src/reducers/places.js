/**
 * Created by federuiz on 7/3/17.
 */
import {
    SELECT_PLACE, SAVE_SUGGESTION, RECEIVE_PLACE_DATA
} from '../constants/ActionTypes'

const initialState = {
    myPlaces: [],
    selectedPlace: null
};

const places = (state = initialState, action) => {
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