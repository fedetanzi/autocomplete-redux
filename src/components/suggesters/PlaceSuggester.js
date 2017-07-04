/**
 * Created by federuiz on 7/3/17.
 */
import Suggester from './Suggester'

export default class PlaceSuggester extends Suggester{

    constructor(name, options, apiHost, type){
        super(name, options, apiHost, type);
        super.setMappingRule({title: "nombre", subTitle: "clase", id: "id"})
    }

    getSuggestions = (text, callback) => {
        const url = `${this.apiHost}buscar/?texto=${text}&limit=${this.options.maxSuggestions}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                return super.mapAttributes(json.instancias)
            })
            .then(items => callback(text, items))
    }
}