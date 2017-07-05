import suggestions from '../reducers/suggestions'
import * as Actions from '../actions/index'

describe ("app reducer", () => {
    let state = {
        currentSuggestions: [],
        currentText: "",
        currentSearch: "",
        maxSuggestions: 10,
        loadingSuggestions: false,
    };
    it('should handle empty initial state', () => {
        state = suggestions(
                    suggestions(
                        suggestions(
                            suggestions(
                                suggestions(state,  Actions.inputChange("libertador")),
                                Actions.requestSuggestions("libertador")),
                            Actions.inputChange("libertado")),
                        Actions.requestSuggestions("libertado")),
                Actions.receiveSuggestions("libertador", [{title: "calle", subTitle: "Direccion"}])
        );

        expect(
            state
        ).toEqual({
            currentSuggestions: [],
            currentText: "libertado",
            currentSearch: "",
            maxSuggestions: 10,
            loadingSuggestions: false,
            }
        )
    });
    it('should handle empty initial state', () => {
        state = suggestions(state, Actions.receiveSuggestions("libertado", [{title: "calle", subTitle: "Direccion"}]));
        expect(
            state
        ).toEqual({
            currentSuggestions: [{title: "calle", subTitle: "Direccion"}],
            currentText: "libertado",
            currentSearch: "libertado",
            maxSuggestions: 10,
            loadingSuggestions: false,
            }
        )
    });
});