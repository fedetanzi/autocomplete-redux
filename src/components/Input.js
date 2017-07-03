/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types'

class Input extends Component{

    static propTypes = {
        fetchSuggestions : PropTypes.func.isRequired ,
        suggest_delay : PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            value: "",
            lastInputTime : null,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTimeOut = this.handleTimeOut.bind(this);
    }

    handleSearch(e) {
        this.setState({ value : e.target.value  , lastInputTime: Date.now() });
        if (e.target.value ) {
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
            <div>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Ingrese lugar o dirección</ControlLabel>
                    <FormControl
                        type="text"
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