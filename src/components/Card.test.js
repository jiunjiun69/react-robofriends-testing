import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { create } from "react-test-renderer";

it('except to render Card component', () => {
    expect(shallow(<Card/>).length).toEqual(1);
});

const card = create(<Card />);
it('renders without crashing', () => {
    expect(card.toJSON()).toMatchSnapshot(); // check if a component renders correctly
});

