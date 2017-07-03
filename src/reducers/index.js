import { combineReducers } from 'redux'
import suggestions from './suggestions'
import places from './places'



const rootReducer = combineReducers({
    suggestions,
    places
});

export default rootReducer
