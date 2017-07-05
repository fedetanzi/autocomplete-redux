/**
 * Created by federuiz on 7/3/17.
 */
import {REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, INPUT_CHANGE} from '../constants/ActionTypes'

const initialState = {
    currentSuggestions: [],
    currentText: "",
    currentSearch: "",
    maxSuggestions: 10,
    loadingSuggesters: {},
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            if (action.suggesterType) state.loadingSuggesters[action.suggesterType] = typeof state.loadingSuggesters[action.suggesterType] !== 'undefined' ? --state.loadingSuggesters[action.suggesterType] : 0;

            return Object.assign({}, state, {
                ...state,
                currentSuggestions: action.text === state.currentText ?
                    (action.text === state.currentSearch && action.text !== "" ?
                        (state.currentSuggestions.concat(action.suggestions)).slice(0, state.maxSuggestions)
                        : action.suggestions.slice(0, state.maxSuggestions))
                    : state.currentSuggestions,
                currentSearch: action.text === state.currentText ? action.text : state.currentSearch,
            });
        case REQUEST_SUGGESTIONS:
            console.log ("equest");
            if (action.suggesterType) state.loadingSuggesters[action.suggesterType] = typeof state.loadingSuggesters[action.suggesterType] !== 'undefined' ? ++state.loadingSuggesters[action.suggesterType] : 1;
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