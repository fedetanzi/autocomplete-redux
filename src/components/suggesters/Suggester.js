/**
 * Created by federuiz on 7/3/17.
 */

export default class Suggester {

    constructor (name, options, apiHost, type){
        this.name = name;
        this.options = options;
        this.apiHost = apiHost;
        this.type = type;
    }
    getType (){
        return this.type;
    }
    setMappingRule (mappingRule) {
        this.mappingRule = mappingRule;
    }
    mapAttributes (suggestions){
        console.log ("mapping");
        return suggestions.map((d) => {
            let suggestion = {};
            for (let [k, v] of Object.entries(this.mappingRule)) {
                suggestion[k] = d[v];
            }
            return suggestion;
        })
    };
}