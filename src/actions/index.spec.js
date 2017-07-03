import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('actions', () => {

    it('SELECT_PLACE action', () => {
      expect(actions.selectSuggestion('Use Redux')).toEqual({
          type: types.SELECT_PLACE,
          selectedPlace: 'Use Redux'
      })
    });

    it('SAVE_SUGGESTION action', () => {
      expect(actions.saveSuggestion('Use Redux')).toEqual({
          type: types.SAVE_SUGGESTION,
          suggestion: 'Use Redux'
      })
    });

    it('RECEIVE_PLACE_DATA action', () => {
      expect(actions.receivePlaceData('Use Redux')).toEqual({
          type: types.RECEIVE_PLACE_DATA,
          details: 'Use Redux'
      })
    });

    it('REQUEST_SUGGESTIONS action', () => {
      expect(actions.requestSuggestions('Use Redux')).toEqual({
          type: types.REQUEST_SUGGESTIONS,
          text: 'Use Redux'
      })
    });

    it('RECEIVE_SUGGESTIONS action', () => {
      expect(actions.receiveSuggestions('Use Redux',[])).toEqual({
         type: types.RECEIVE_SUGGESTIONS,
          text: 'Use Redux',
          suggestions: [],
          receivedAt: Date.now()
      })
    });

    it('INPUT_CHANGE action', () => {
        expect(actions.inputChange('Use Redux')).toEqual({
            type: types.INPUT_CHANGE,
            text: 'Use Redux'
        })
    });

});
