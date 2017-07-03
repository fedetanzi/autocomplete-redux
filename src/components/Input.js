/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types'

class Input extends Component{

    static propTypes = {
        fetchSuggestions : PropTypes.func.isRequired ,
        clearSuggestions : PropTypes.func.isRequired ,
        inputChange : PropTypes.func.isRequired ,
        suggest_delay : PropTypes.number.isRequired,
        text : PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = {
            value: this.props.text || '',
            lastInputTime : null,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTimeOut = this.handleTimeOut.bind(this);
    }

    handleSearch(e) {
        const query = e.target.value;
        this.setState({ value : query  , lastInputTime: Date.now() });
        this.props.inputChange(query);
        if (!query) {
            //Delete all suggestions
            this.props.clearSuggestions()
        }else{
            //Fetch suggestions
            setTimeout(this.handleTimeOut,this.props.suggest_delay)
        }
    }

    handleTimeOut(){
        if(Date.now() - this.state.lastInputTime >= this.props.suggest_delay){
            this.props.fetchSuggestions(this.state.value)
        }
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
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
        );
    }

}

export default Input
