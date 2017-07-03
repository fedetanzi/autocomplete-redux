/**
 * Created by federuiz on 7/3/17.
 */
import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS
} from '../actions'

const initialState = {
    currentSuggestions: [],
    isFetching: false,
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
                currentSuggestions: state.currentSuggestions.concat(action.suggestions),
            });
        case REQUEST_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                isFetching: true,
            });
        default:
            return state
    }
};

export default suggestions