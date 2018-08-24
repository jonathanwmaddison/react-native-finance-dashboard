import React from 'react';
import renderer from 'react-test-renderer'
import { sortButtons } from './Dashboard';
import { FontAwesome } from '@expo/vector-icons';

jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome'
}));

describe('sort buttons', () => {
  it('renders properly when ascending, sortBy Amount', () => {
    const ascending = true
    const buttons = sortButtons(true, 0);
    const AmountButton = buttons[0].element
    expect(renderer.create(<AmountButton />).toJSON()).toMatchSnapshot()
  });
  it('renders properly when descending, sortBy Amount', () => {
    const ascending = true
    const buttons = sortButtons(false, 0);
    const AmountButton = buttons[0].element
    expect(renderer.create(<AmountButton />).toJSON()).toMatchSnapshot()
  });
  it('renders properly when ascending, sortBy Date', () => {
    const ascending = true
    const buttons = sortButtons(true, 1);
    const DateButton = buttons[1].element
    expect(renderer.create(<DateButton />).toJSON()).toMatchSnapshot()
  });
  it('renders properly when descending, sortBy Date', () => {
    const ascending = true
    const buttons = sortButtons(false, 1);
    const DateButton = buttons[1].element
    expect(renderer.create(<DateButton />).toJSON()).toMatchSnapshot()
  });
})
