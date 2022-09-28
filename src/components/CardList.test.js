import React from 'react';
import CardList from './CardList';
import { create } from "react-test-renderer";

const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

const cardList = create(<CardList robots={filteredRobots}/>);
it('renders without crashing', () => {
    expect(cardList.toJSON()).toMatchSnapshot(); // check if a component renders correctly
});