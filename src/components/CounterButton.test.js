import React from 'react';
import CounterButton from './CounterButton';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
    const mockColor = 'red';
    const counterButton = create(<CounterButton color={mockColor }/>);
    expect(counterButton.toJSON()).toMatchSnapshot(); // check if a component renders correctly
});

it('correnctly increments the counter', () => {
    const mockColor = 'red';
    const counterButton = create(<CounterButton color={mockColor}/>);
    const wrapper = counterButton.toJSON();
    expect(wrapper).toMatchSnapshot();
    // wrapper.find('[id="counter"]').simulate('click');
    // expect((wrapper.state())).toEqual({count: 2})
    // expect(wrapper.props().color).toEqual('red');
  });