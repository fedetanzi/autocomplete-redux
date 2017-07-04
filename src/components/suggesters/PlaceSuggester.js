/**
 * Created by federuiz on 7/3/17.
 */
import Suggester from './Suggester'

export default class PlaceSuggester extends Suggester{

    constructor(name, options, apiHost){
        super(name, options, apiHost);
        super.setMappingRule({title: "nombre", subTitle: "clase", id: "id"})
    }

    getSuggestions = (text, callback, maxSuggestions) => {
        const url = `${this.apiHost}buscar/?texto=${text}&limit=${maxSuggestions}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                // let promises = json.instancias.map ((place) => {
                //     return fetch (`${this.apiHost}getObjectContent/?id=${place.id}`)
                //         .then (response => response.json())
                //         .then (json => {
                //             place.direction = json.direccionNormalizada;
                //             return place;
                //         })
                // });
                // return Promise.all (promises).then (values => super.mapAttributes(values));
                return super.mapAttributes(json.instancias)
            })
            .then(items => callback(text, items))
    }
}