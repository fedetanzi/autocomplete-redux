/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

class Input extends Component{

    constructor(props){
        super(props);
        this.suggest_delay = 1000;
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
            setTimeout(this.handleTimeOut,this.suggest_delay)
        }
    }

    handleTimeOut(){
        if(Date.now() - this.state.lastInputTime >= this.suggest_delay){
        }
    }

    render() {
        return (
            <div>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Ingrese lugar o direccíon</ControlLabel>
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