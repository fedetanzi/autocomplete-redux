import Input from "./Input";
import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';

jest.useFakeTimers();

const setup = () => {
    const props = {
        fetchSuggestions : jest.fn(),
        clearSuggestions : jest.fn(),
        inputChange : jest.fn(),
        change: jest.fn(),
        suggest_delay_street : 800,
        suggest_delay_place : 1000,
        text: 'Use Redux'
    };

    const renderer = createRenderer();
    renderer.render(<Input {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props: props,
        output: output,
        renderer: renderer
    }
};



describe('components', () => {
    describe('Input', () => {
        it('should render correctly', () => {
            const { output } = setup();
            expect(output.type).toBe('div');
            expect(output.props.className).toBe('input-react');
            const input = output.props.children.props.children[1];
            expect(input.props.value).toBe('Use Redux')
        });
        it('should call inputChange', () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: 'Use Radox' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(inputUpdated.props.value).toEqual('Use Radox');
            expect(props.inputChange).toBeCalled();
            expect(props.clearSuggestions).not.toBeCalled()
        });
        it('should call clearSuggestions', () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: '' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(props.inputChange).toBeCalled();
            expect(props.clearSuggestions).toBeCalled();
            expect(props.fetchSuggestions).not.toBeCalled()
        });
        it('should call fetchSuggestions', async () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: 'Use Radox' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(props.inputChange).toBeCalled();
            expect(setTimeout.mock.calls[0][1]).toBe(props.suggest_delay_street);
            expect(setTimeout.mock.calls[1][1]).toBe(props.suggest_delay_place);
        });
    })
});
