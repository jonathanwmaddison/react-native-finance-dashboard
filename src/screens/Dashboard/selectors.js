import { createSelector } from 'reselect';
import _ from 'lodash';
import Fuse from 'fuse.js';

const searchableCategories = [
  'transAmt',
  'description',
  'transTo',
  'transFrom',
];
const searchOption = {
  keys: searchableCategories,
  threshold: 0.3,
  location: 0,
  tokenize: true,
  maxPatternLength: 32,
  minMatchCharLength: 1,
};
// selector to help filter and sort transaction data
// fuse uses fuzzy search to find matches among searchableCategories
export const getTransactions = (state, props) => {
  const { sortBy, search } = props;

  const {
    dashboard: { transactions },
  } = state;

  if (search) {
    const fuse = new Fuse(transactions, searchOption);
    const searchResults= fuse.search(search);
    return _.orderBy(searchResults, [sortBy], ['asc']);
  } else {
    return _.orderBy(transactions, [sortBy], ['asc']);;
  }
};

export const getTransactionsState = createSelector(
  getTransactions,
  transactions => transactions
);
