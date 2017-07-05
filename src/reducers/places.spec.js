/**
 * Created by federuiz on 7/3/17.
 */
import places from './places'
import * as types from '../constants/ActionTypes'

describe ("places reducer", () => {
    it('should handle empty initial state', () => {
        expect(
            places(undefined, {})
        ).toEqual({
                myPlaces: [],
                selectedPlace: null,
                loadingData: false,
            }
        )
    });

    it('should handle SAVE_SUGGESTION', () => {
        // Save a suggestion without details
        expect(
            places({
                myPlaces: [],
                selectedPlace: null,
                loadingData: false,
            }, {
                type: types.SAVE_SUGGESTION,
                suggestion: {
                    "title" : "My address 123",
                    "subTitle" : "My Location",
                }
            })
        ).toEqual({
            myPlaces: [
                {
                    "title" : "My address 123",
                    "subTitle" : "My Location",
                }
            ],
            selectedPlace: null,
            loadingData: false,
        });
        // Save a suggestion with details
        expect(
            places({
                myPlaces: [{
                    "title" : "My address 123",
                    "subTitle" : "My Location",
                }],
                selectedPlace: null
            }, {
                type: types.SAVE_SUGGESTION,
                suggestion: {
                    "title": "My address 123",
                    "subTitle": "My Location",
                    details: {
                        "detail1": "detail",
                        "detail2": "detail"
                    },
                    coordinates: {
                        x: 121213,
                        y: 1291921
                    }
                }
            })
        ).toEqual({
            myPlaces: [
                {
                    "title": "My address 123",
                    "subTitle": "My Location",
                    details: {
                        "detail1": "detail",
                        "detail2": "detail"
                    },
                    coordinates: {
                        x: 121213,
                        y: 1291921
                    }
                },
                {
                    "title" : "My address 123",
                    "subTitle" : "My Location",
                },

            ],
            selectedPlace: null,
            loadingData: false,
        });
    });

    it('should handle SELECT_PLACE', () => {
        // Save a suggestion without details
        expect(
            places({
                myPlaces: [{
                    "title": "My address 123",
                    "subTitle": "My Location",
                    details: {
                        "detail1": "detail",
                        "detail2": "detail"
                    },
                    coordinates: {
                        x: 121213,
                        y: 1291921
                    }
                }],
                selectedPlace: null
            }, {
                type: types.SELECT_PLACE,
                selectedPlace: {
                    "title": "My address 123",
                    "subTitle": "My Location",
                    details: {
                        "detail1": "detail",
                        "detail2": "detail"
                    },
                    coordinates: {
                        x: 121213,
                        y: 1291921
                    }
                }
            })
        ).toEqual({
            myPlaces: [
                {
                    "title": "My address 123",
                    "subTitle": "My Location",
                    details: {
                        "detail1": "detail",
                        "detail2": "detail"
                    },
                    coordinates: {
                        x: 121213,
                        y: 1291921
                    }
                }
            ],
            selectedPlace: {
                "title": "My address 123",
                "subTitle": "My Location",
                details: {
                    "detail1": "detail",
                    "detail2": "detail"
                },
                coordinates: {
                    x: 121213,
                    y: 1291921
                }
            }
        });
    });
});
