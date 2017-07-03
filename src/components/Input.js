/**
 * Created by federicotanzi on 7/3/17.
 */
import React, { Component } from 'react'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

class Input extends Component{

    constructor(props){
        super(props);
        this.suggest_delay = 1000;
        this.state = {
            value: '',
            lastInputTime : 0
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Ingrese lugar o direccíon</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleOnChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}

export default Input