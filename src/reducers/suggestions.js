/**
 * Created by federuiz on 7/3/17.
 */
import {REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, INPUT_CHANGE, CLEAR_SUGGESTIONS} from '../constants/ActionTypes'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
    currentSuggestions: [],
    currentText: "",
    currentSearch: "",
    maxSuggestions: 10,
    loadingSuggesters: {},
    requestIndex: 0,
};

const suggestions = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SUGGESTIONS:
            if (action.suggesterType) state.loadingSuggesters[action.suggesterType] = typeof state.loadingSuggesters[action.suggesterType] !== 'undefined' ? --state.loadingSuggesters[action.suggesterType] : 0;

            return Object.assign({}, state, {
                ...state,
                currentSuggestions: action.text === state.currentText && action.requestIndex === state.requestIndex ?
                    (action.text === state.currentSearch && action.text !== "" ?
                        (state.currentSuggestions.concat(action.suggestions)).slice(0, state.maxSuggestions)
                        : action.suggestions.slice(0, state.maxSuggestions))
                    : state.currentSuggestions,
                currentSearch: action.text === state.currentText ? action.text : state.currentSearch,
            });
        case CLEAR_SUGGESTIONS:
            return Object.assign({}, state, {
                ...state,
                currentText: "",
                currentSearch: "",
                currentSuggestions: [],
            });
        case REQUEST_SUGGESTIONS:
            if (action.suggesterType) {
                state.loadingSuggesters[action.suggesterType] = typeof state.loadingSuggesters[action.suggesterType] !== 'undefined' ? ++state.loadingSuggesters[action.suggesterType] : 1;
                state.requestIndex = action.requestIndex;
            }
            return Object.assign({}, state, {
                ...state,
            });
        case INPUT_CHANGE:
            return Object.assign({}, state, {
                ...state,
                currentText: action.text,
            });
        case REHYDRATE:
            let incoming = action.payload.suggestions;
            if (incoming) return {...state, ...incoming, currentText: "", loadingSuggesters: {}, requestIndex: 0};
            return state;
        default:
            return state
    }
};

export default suggestions