export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';
export const SAVE_SUGGESTION = 'SAVE_SUGGESTION';
export const SELECT_PLACE = 'SELECT_PLACE';
export const RECEIVE_PLACE_DATA = 'RECEIVE_PLACE_DATA';

export const selectSuggestion = place => ({
    type: SELECT_PLACE,
    selectedPlace: place
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
  suggestions: json.instancias,
  receivedAt: Date.now()
});

export const fetchSuggestions = text => dispatch => {
  dispatch(requestSuggestions(text));
  return fetch(`http://epok.buenosaires.gob.ar/buscar/?start=0&limit=20&texto=libertador&tipo=ranking&totalFull=false&_=1499087979097`)
    .then(response => response.json())
    .then(json => dispatch(receiveSuggestions(text, json)))
};

