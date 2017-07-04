/**
 * Created by federuiz on 7/3/17.
 */
import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, INPUT_CHANGE
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
                currentSuggestions: action.text === state.currentText ? (action.text === state.currentSearch && action.text !== "" ? state.currentSuggestions.concat(action.suggestions) : action.suggestions) : state.currentSuggestions,
                currentSearch: action.text
            });
        case REQUEST_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
            });
        case INPUT_CHANGE:
            return Object.assign({}, state, {
                ...state,
                currentText: action.text,
            });
        default:
            return state
    }
};

export default suggestions