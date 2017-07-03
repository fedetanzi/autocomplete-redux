/**
 * Created by federuiz on 7/3/17.
 */
import Suggester from './Suggester'

export default class PlaceSuggester extends Suggester{

    constructor(name, options, apiHost){
        super(name, options, apiHost);
        super.setMappingRule({title: "nombre", subTitle: "clase"})
    }

    getSuggestions = (text, callback, maxSuggestions) => {
        const url = `${this.apiHost}texto=${text}&limit=${maxSuggestions}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => super.mapAttributes(json.instancias))
            .then(items => callback(text, items))
    }
}