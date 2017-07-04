/**
 * Created by federuiz on 7/4/17.
 */
import React from 'react'
import { mount } from 'enzyme';
import ConnectedApp, {App} from '../containers/App'
import {Provider} from 'react-redux'

import * as Actions from '../actions/index'
import {createStore} from 'redux'
import reducers from '../reducers/index'

describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    let store,wrapper;


    it('+++ check Prop matches with initialState', () => {
        store = createStore(reducers);
        wrapper = mount( <Provider store={store}><App /></Provider> )
        store.dispatch(Actions.inputChange("fee"));
        expect(wrapper.find(App).prop('fee')).toBe(500)
    });

});