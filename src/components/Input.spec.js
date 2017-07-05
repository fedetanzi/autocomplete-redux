import Input from "./Input";
import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';

jest.useFakeTimers();

const setup = () => {
    const props = {
        fetchSuggestions : jest.fn().mockImplementationOnce(cb => cb(null, true)),
        clearSuggestions : jest.fn(),
        inputChange : jest.fn(),
        change: jest.fn(),
        suggest_delay_street : 600,
        suggest_delay_place : 700,
        text: '',
        length_query : 2
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
            expect(input.props.value).toBe('')
        });
        it('should call inputChange', () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: 'libertador' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(inputUpdated.props.value).toEqual('libertador');
            expect(props.inputChange).toBeCalled();
        });
        it('should call clearSuggestions', () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: '' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(inputUpdated.props.value).toEqual('');
            expect(props.inputChange).toBeCalled();
            expect(props.clearSuggestions).toBeCalled();
        });
        it('should not call clearSuggestions', () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: 'lib' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(inputUpdated.props.value).toEqual('lib');
            expect(props.inputChange).toBeCalled();
            expect(props.clearSuggestions).not.toBeCalled();
        });
        it('should call fetchSuggestions', async () => {
            const {props, output, renderer } = setup();
            const input = output.props.children.props.children[1];
            input.props.onChange({ target: { value: 'libertador' } });
            const updated = renderer.getRenderOutput();
            const inputUpdated = updated.props.children.props.children[1];
            expect(props.inputChange).toBeCalled();
            expect(inputUpdated.props.value).toEqual('libertador');
            setTimeout(() => {
                expect(props.fetchSuggestions).toBeCalled();
            }, props.suggest_delay_street);
            setTimeout(() => {
                expect(props.fetchSuggestions).toBeCalled();
            }, props.suggest_delay_place);
        });
    })
});
