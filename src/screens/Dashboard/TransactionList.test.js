import React from 'react';
import renderer from 'react-test-renderer'
import { mockTransactions } from '../../util/mockData';
import { TransactionList } from './TransactionList'

jest.mock('./TransactionItem', () => 'TransactionItem')

describe('TransactionList', () => {
  let wrapper;
  let props = {
    sortByKey: 'transAmt',
    search: null,
    ascendingSort: false
  };
  beforeEach(() => {
    wrapper = renderer
      .create(<TransactionList {...props} transactions={mockTransactions} />)
  });
  it('[snapshot] matches', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('[method] keyExtractor gets correct key', () => {
    expect(wrapper.getInstance().keyExtractor(mockTransactions[0])).toBe('24')
  })
})
