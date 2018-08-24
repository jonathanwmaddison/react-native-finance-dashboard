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

export const getTransactions = state => state.dashboard.transactions;

export const getProps = (state, { sortByKey, search, ascendingSort }) => ({
  sortByKey,
  search,
  ascendingSort,
});

// selector to help filter and sort transaction data
export const getFilteredTransactions = (props, transactions) => {
  const { sortByKey, search, ascendingSort } = props;
  const sortType = ascendingSort ? ['asc'] : ['desc'];
  if (search) {
    // fuse uses fuzzy search to find matches among searchableCategories
    const fuse = new Fuse(transactions, searchOption);
    const searchResults = fuse.search(search);
    return _.orderBy(searchResults, [sortByKey], sortType);
  } else {
    return _.orderBy(transactions, [sortByKey], sortType);
  }
};

export const getTransactionsState = createSelector(
  getProps,
  getTransactions,
  getFilteredTransactions
);
