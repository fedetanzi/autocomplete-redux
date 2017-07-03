/**
 * Created by federuiz on 7/3/17.
 */
import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS
} from '../constants/ActionTypes'

const initialState = {
    currentSuggestions: [],
    isFetching: false,
    currentText: "",
    currentSearch: ""
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                currentSuggestions: action.text === state.currentSearch ? state.currentSuggestions.concat(action.suggestions) : action.suggestions,
                currentSearch: action.currentSearch
            });
        case REQUEST_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                isFetching: true
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