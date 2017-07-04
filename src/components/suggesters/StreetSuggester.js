/**
 * Created by federuiz on 7/3/17.
 */
import Suggester from './Suggester'

export default class StreetSuggester extends Suggester{

    constructor(name, options, apiHost){
        super(name, options, apiHost);
        super.setMappingRule({title: "direccion", subTitle: "nombre_localidad", coordinates: "coordenadas"})
    }

    getSuggestions = (text, callback, maxSuggestions) => {
        const url = `${this.apiHost}direccion=${text}&maxOptions=${maxSuggestions}&geocodificar=true`;
        return fetch(url)
            .then(response => response.json())
            .then(json => super.mapAttributes(json.direccionesNormalizadas))
            .then(items => callback(text, items))
    }
}