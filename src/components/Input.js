/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types'

class Input extends Component{

    static propTypes = {
        clearSuggestions : PropTypes.func.isRequired ,
        inputChange : PropTypes.func.isRequired ,
        suggest_delay_street : PropTypes.number.isRequired,
        suggest_delay_place : PropTypes.number.isRequired,
        text : PropTypes.string.isRequired,
        change: PropTypes.func.isRequired,
        length_query : PropTypes.number.isRequired,
        fetchSuggestionsStreet: PropTypes.func.isRequired ,
        fetchSuggestionsPlace: PropTypes.func.isRequired
    };


    constructor(props){
        super(props);
        this.state = {
            value: this.props.text || '',
            lastInputTime : null,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.timeFetchSuggestionsPlace = this.timeFetchSuggestionsPlace.bind(this);
        this.timeFetchSuggestionsStreet = this.timeFetchSuggestionsStreet.bind(this);
    }

    handleSearch(e) {
        const query = e.target.value;
        this.setState({ value : query  , lastInputTime: Date.now() });
        this.props.inputChange(query);
        if (query.length <= this.props.length_query  ) {
            this.props.clearSuggestions(query);
            this.props.change(false);
        }else if(query.length > this.props.length_query){
            setTimeout(this.timeFetchSuggestionsStreet,this.props.suggest_delay_street);
            setTimeout(this.timeFetchSuggestionsPlace,this.props.suggest_delay_place);
            this.props.change(true);
        }
    }

    timeFetchSuggestionsStreet(){
        if (Date.now() - this.state.lastInputTime >= this.props.suggest_delay_street) {
            this.props.fetchSuggestionsStreet(this.state.value)
        }
    }

    timeFetchSuggestionsPlace() {
        if (Date.now() - this.state.lastInputTime >= this.props.suggest_delay_place) {
            this.props.fetchSuggestionsPlace(this.state.value)
        }
    }

    handleOnBlur(){
        this.props.change(false);
    }

    render() {
        return (
            <div className="input-react">
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Ingrese lugar o dirección</ControlLabel>
                    <FormControl
                        type="text"
                        className="input"
                        value={this.state.value}
                        onChange={this.handleSearch}
                        onBlur={() => this.handleOnBlur}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
        );
    }

}

export default Input
