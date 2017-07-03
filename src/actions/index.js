import StreetSuggester from '../components/suggesters/StreetSuggester'
import PlaceSuggester from '../components/suggesters/PlaceSuggester'
import {SELECT_PLACE, INPUT_CHANGE, SAVE_SUGGESTION, RECEIVE_PLACE_DATA,RECEIVE_SUGGESTIONS,REQUEST_SUGGESTIONS} from '../constants/ActionTypes'

const suggesters = [
    new StreetSuggester("street", {}, "http://servicios.usig.buenosaires.gob.ar/normalizar/?"),
    new PlaceSuggester("place", {}, "http://epok.buenosaires.gob.ar/buscar/?")
];

export const selectSuggestion = place => ({
    type: SELECT_PLACE,
    selectedPlace: place
});

export const inputChange = text => ({
    type: INPUT_CHANGE,
    text: text
});

export const saveSuggestion = suggestion => ({
    type: SAVE_SUGGESTION,
    suggestion: suggestion
});

export const receivePlaceData = details => ({
    type: RECEIVE_PLACE_DATA,
    details: details
});

export const requestSuggestions = text => ({
  type: REQUEST_SUGGESTIONS,
  text: text
});

export const receiveSuggestions = (text, json) => ({
  type: RECEIVE_SUGGESTIONS,
  text: text,
  suggestions: json,
  receivedAt: Date.now()
});

export const fetchSuggestions = text => dispatch => {
    dispatch(requestSuggestions(text));
    suggesters.forEach((suggester) => {
        suggester.getSuggestions(text, (text, items) => {dispatch(receiveSuggestions(text, items))}, 10);
    });

};

