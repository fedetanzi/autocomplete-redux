/**
 * Created by federuiz on 7/3/17.
 */
import suggestions from './suggestions'
import * as types from '../constants/ActionTypes'

describe ("suggestions reducer", () => {
    it('should handle empty initial state', () => {
        expect(
            suggestions(undefined, {})
        ).toEqual({
                currentSuggestions: [],
                currentText: "",
                currentSearch: "",
                maxSuggestions: 10,
                loadingSuggesters: {},
            }
        )
    });

    it('should handle INPUT_CHANGE', () => {
        expect(
            suggestions({
                currentSuggestions: [],
                currentText: "",
                currentSearch: ""
            }, {
                type: types.INPUT_CHANGE,
                text: "libertador"
            })
        ).toEqual({
            currentSuggestions: [],
            currentText: "libertador",
            currentSearch: ""
        })
    });

    it('should handle REQUEST_SUGGESTIONS', () => {
        expect(
            suggestions({
                currentSuggestions: [],
                currentText: "libertador",
                currentSearch: "",
                loadingSuggesters: {},
            }, {
                type: types.REQUEST_SUGGESTIONS,
                text: "libertador",
                suggesterType: "STREET_TYPE",

            })
        ).toEqual({
            currentSuggestions: [],
            currentText: "libertador",
            currentSearch: "",
            loadingSuggesters: {"STREET_TYPE": 1},
        })
    });

    it('should handle RECEIVE_SUGGESTIONS', () => {
        // Add a suggestion with empty list.
        expect(
            suggestions({
                currentSuggestions: [],
                currentText: "libertador",
                currentSearch: "libertador",
                loadingSuggesters: {},
            }, {
                type: types.RECEIVE_SUGGESTIONS,
                suggestions: [
                    {
                        title: 'My address 123',
                        subtitle: "My region"
                    }
                ],
                text: "libertador",
                suggesterType: "STREET_TYPE",
            })
        ).toEqual({
            currentSuggestions: [{
                title: 'My address 123',
                subtitle: "My region"
            }],
            currentText: "libertador",
            currentSearch: "libertador",
            loadingSuggesters: {"STREET_TYPE": 0},
        });
        // Add a suggestion with existing current suggestions.
        expect(
            suggestions({
                currentSuggestions: [{
                    title: 'My address 123',
                    subtitle: "My region"
                }],
                currentText: "libertador",
                currentSearch: "libertador",
                loadingSuggesters: {"STREET_TYPE": 1},
            }, {
                type: types.RECEIVE_SUGGESTIONS,
                suggestions: [
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    }
                ],
                text: "libertador",
                suggesterType: "STREET_TYPE",
            })
        ).toEqual({
            currentSuggestions: [
                {
                    title: 'My address 123',
                    subtitle: "My region"
                },
                {
                    title: 'My address 1234',
                    subtitle: "My region"
                }],
            currentText: "libertador",
            currentSearch: "libertador",
            loadingSuggesters: {"STREET_TYPE": 0},
        });
        // Reset the suggestions to an empty list.
        expect(
            suggestions({
                currentSuggestions: [
                    {
                    title: 'My address 1234',
                    subtitle: "My region"
                }],
                currentText: "",
                currentSearch: "",
                loadingSuggesters: {},

            }, {
                type: types.RECEIVE_SUGGESTIONS,
                suggestions: [
                ],
                text: ""
            })
        ).toEqual({
            currentSuggestions: [],
            currentText: "",
            currentSearch: "",
            loadingSuggesters: {},
        });
        // Try to add a suggestion when currentText is different than the action text.
        expect(
            suggestions({
                currentSuggestions: [],
                currentText: "libertador",
                currentSearch: "libertador",
                loadingSuggesters: {"STREET_TYPE": 1},
            }, {
                type: types.RECEIVE_SUGGESTIONS,
                suggestions: [
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    }
                ],
                text: "santa fe",
                suggesterType: "STREET_TYPE",
            })
        ).toEqual({
            currentSuggestions: [],
            currentText: "libertador",
            currentSearch: "libertador",
            loadingSuggesters: {"STREET_TYPE": 0},
        });
        // Try to add more suggestions than the limit.
        expect(
            suggestions({
                currentSuggestions: [],
                currentText: "libertador",
                currentSearch: "libertador",
                maxSuggestions: 2,
                loadingSuggesters: {"STREET_TYPE": 1},
            }, {
                type: types.RECEIVE_SUGGESTIONS,
                suggestions: [
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    },
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    },
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    },
                    {
                        title: 'My address 1234',
                        subtitle: "My region"
                    }
                ],
                text: "libertador",
                suggesterType: "STREET_TYPE",
            })
        ).toEqual({
            currentSuggestions: [{
                title: 'My address 1234',
                subtitle: "My region"
            },
                {
                    title: 'My address 1234',
                    subtitle: "My region"
                }],
            currentText: "libertador",
            currentSearch: "libertador",
            maxSuggestions: 2,
            loadingSuggesters: {"STREET_TYPE": 0},
        })
    });
});
