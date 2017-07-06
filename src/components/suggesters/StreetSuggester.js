/**
 * Created by federuiz on 7/3/17.
 */
import Suggester from './Suggester'
import {DIRECTION_TYPE} from '../../constants/ActionTypes'

export default class StreetSuggester extends Suggester{

    constructor(name, options, apiHost, type){
        super(name, options, apiHost, type);
        super.setMappingRule({title: "direccion", subTitle: "tipo", coordinates: "coordenadas"})
    }

    getSuggestions = (text, callback) => {
        const url = `${this.apiHost}direccion=${text}&maxOptions=${this.options.maxSuggestions}`;
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const mapped = json.direccionesNormalizadas.map ((d) => {
                    d.tipo = DIRECTION_TYPE;
                    return d;
                });
                return super.mapAttributes(mapped);
            })
            .then(items => callback(text, items, this.type))
    }
}