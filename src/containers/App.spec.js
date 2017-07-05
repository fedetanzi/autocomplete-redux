import suggestions from '../reducers/suggestions'
import * as Actions from '../actions/index'

describe ("app reducer", () => {
    let state = {
        currentSuggestions: [],
        currentText: "",
        currentSearch: "",
        maxSuggestions: 10,
        loadingSuggesters: {},
    };
    it('should handle empty initial state', () => {
        state = suggestions(
                    suggestions(
                        suggestions(
                            suggestions(
                                suggestions(state,  Actions.inputChange("libertador")),
                                Actions.requestSuggestions("libertador", "STREET_TYPE")),
                            Actions.inputChange("libertado")),
                        Actions.requestSuggestions("libertado", "STREET_TYPE")),
                Actions.receiveSuggestions("libertador", [{title: "calle", subTitle: "Direccion"}], "STREET_TYPE")
        );

        expect(
            state
        ).toEqual({
            currentSuggestions: [],
            currentText: "libertado",
            currentSearch: "",
            maxSuggestions: 10,
            loadingSuggesters: {"STREET_TYPE": 1},
            }
        )
    });
    it('should handle empty initial state', () => {
        state = suggestions(state, Actions.receiveSuggestions("libertado", [{title: "calle", subTitle: "Direccion"}], "STREET_TYPE"));
        expect(
            state
        ).toEqual({
            currentSuggestions: [{title: "calle", subTitle: "Direccion"}],
            currentText: "libertado",
            currentSearch: "libertado",
            maxSuggestions: 10,
            loadingSuggesters: {"STREET_TYPE": 0},
            }
        )
    });
});