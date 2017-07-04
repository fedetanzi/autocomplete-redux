import StreetSuggester from '../components/suggesters/StreetSuggester'
import PlaceSuggester from '../components/suggesters/PlaceSuggester'
import {COORDINATES_URL, STREET_URL, PLACE_URL, DETAILS_URL} from '../constants/ApiUrls'

import {SELECT_PLACE, INPUT_CHANGE,SAVE_SUGGESTION, RECEIVE_PLACE_DATA,RECEIVE_SUGGESTIONS,REQUEST_SUGGESTIONS} from '../constants/ActionTypes'

const suggesters = [
    new StreetSuggester("street", {}, STREET_URL),
    new PlaceSuggester("place", {}, PLACE_URL)
];

export const selectSuggestion = place => ({
    type: SELECT_PLACE,
    selectedPlace: place
});

export const inputChange = text => ({
    type: INPUT_CHANGE,
    text: text
});

export const saveSuggestion = suggestion => (dispatch, getState) => {
    console.log ("saving");
    // The street suggestions already contain the coordinates, but the places suggestions don't
    if (suggestion.coordinates) {
        const coordinatesUrl = `${DETAILS_URL}x=${suggestion.coordinates.x}&y=${suggestion.coordinates.y}`;
        return getCoordinates(coordinatesUrl, suggestion, dispatch);
    }
    // We need the suggestion id to get its coordinates
    if (suggestion.id) {
        const contentUrl =`${PLACE_URL}getObjectContent?id=${suggestion.id}`;
        return fetch (contentUrl)
            .then (response => response.json())
            .then (json => {
                suggestion.coordinates = getCoordinatesFromPoint(json.ubicacion.centroide);
                const coordinatesUrl = `${DETAILS_URL}x=${suggestion.coordinates.x}&y=${suggestion.coordinates.y}`;
                return getCoordinates(coordinatesUrl, suggestion, dispatch);
            })
    }
};
// The getObjectContent API returns a POINT string with the coordinates in it.
const getCoordinatesFromPoint = (pointString) => {
    const parenthesisSplit = pointString.split("(")[1].split(")")[0].split(" ");
    return {
        x: parenthesisSplit[0],
        y: parenthesisSplit[1],
    }
};

const getCoordinates = (url, suggestion, dispatch) => {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            suggestion.details = json;
            dispatch({
                type: SAVE_SUGGESTION,
                suggestion: suggestion
            })
        })
};

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

export const clearSuggestions = () => ({
    type: RECEIVE_SUGGESTIONS,
    text: "",
    suggestions: [],
    receivedAt: Date.now()
});

export const fetchSuggestions = text => dispatch => {
    dispatch(requestSuggestions(text));
    suggesters.forEach((suggester) => {
        suggester.getSuggestions(text, (text, items) => {dispatch(receiveSuggestions(text, items))}, 10);
    });

};




