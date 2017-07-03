/**
 * Created by federuiz on 7/3/17.
 */
import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS,INPUT_CHANGE
} from '../constants/ActionTypes'

const initialState = {
    currentSuggestions: [],
    currentText: "",
    currentSearch: ""
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                currentSuggestions: action.text === state.currentText ? (action.text === state.currentSearch ? state.currentSuggestions.concat(action.suggestions) : action.suggestions) : state.currentSuggestions,
            });
        case REQUEST_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                currentSearch: action.currentSearch
            });
        case INPUT_CHANGE:
            return {
                ...state,
                currentText: action.text,
            };
        default:
            return state
    }
};

export default suggestions