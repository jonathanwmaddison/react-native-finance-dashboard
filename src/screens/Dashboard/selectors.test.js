import React from 'react';
import { mockTransactions } from '../../util/mockData';
import { getFilteredTransactions } from './selectors';

describe('getFilteredTransactions', () => {
  it('sorts by amount', () => {
    const props = {ascendingSort: false, sortByKey: 'transAmt'};

    const [firstValue, secondValue, thirdValue] = getFilteredTransactions(props, mockTransactions)
    expect(firstValue).toBe(mockTransactions[0])
    expect(secondValue).toBe(mockTransactions[2])
    expect(thirdValue).toBe(mockTransactions[1])
  });
  it('sorts by time', () => {
    const props = {ascendingSort: false, sortByKey: 'transTime'};
    const [firstValue, secondValue, thirdValue] = getFilteredTransactions(props, mockTransactions);
    expect(firstValue).toBe(mockTransactions[2]);
    expect(secondValue).toBe(mockTransactions[0]);
    expect(thirdValue).toBe(mockTransactions[1])
  });
  it('searches properly', () => {
    let props = {ascendingSort: false, sortByKey: 'transTime', search: 'A'};
    let result = getFilteredTransactions(props, mockTransactions);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(mockTransactions[1]);
    props.search = 'B';
    result = getFilteredTransactions(props, mockTransactions);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(mockTransactions[0]);
    props.search = 'C';
    result = getFilteredTransactions(props, mockTransactions);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(mockTransactions[2]);
  });
})
