/**
 * Created by federuiz on 7/3/17.
 */

export default class Suggester {

    constructor (name, options, apiHost){
        this.name = name;
        this.options = options;
        this.suggestions = [];
        this.apiHost = apiHost;
    }
    setMappingRule (mappingRule) {
        this.mappingRule = mappingRule;
    }
    mapAttributes (suggestions){
        console.log ("mapping");
        return suggestions.map((d) => {
            return {
                title: d[this.mappingRule["title"]],
                subTitle: d[this.mappingRule["subTitle"]]
            }
        })
    };

    requestSuggestions(url, text, callback){

    }

}