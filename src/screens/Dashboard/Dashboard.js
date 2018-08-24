import React from 'react';
import { func, bool, string, number } from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import _ from 'lodash';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import TransactionList from './TransactionList';
import { FontAwesome } from '@expo/vector-icons';

const propTypes = {
  handleSortPress: func.isRequired,
  handleSearchInput: func.isRequired,
  ascendingSort: bool.isRequired,
  sortBy: number.isRequired,
  search: string,
};
const defaultProps = {
  search: null,
};

const sortKeys = {
  0: 'transAmt',
  1: 'transTime',
};

export const sortButtons = (ascendingSort, sortBy ) => {
  const iconName = ascendingSort ? 'sort-up' : 'sort-down';
  return [
    {
      element: () => (
        <Text>
          {' '}
          Amount {sortBy === 0 && <FontAwesome name={iconName} size={20} />}
        </Text>
      ),
    },
    {
      element: () => (
        <Text>
          {' '}
          Date {sortBy === 1 && <FontAwesome name={iconName} size={20} />}
        </Text>
      ),
    },

  ];
};

const Dashboard = ({
  handleSortPress,
  handleSearchInput,
  ascendingSort,
  sortBy,
  search,
}) => (
  <View style={{ flex: 1, paddingBottom: 15 }}>
    <SearchBar
      onChangeText={handleSearchInput}
      placeholder="Search your transactions..."
      lightTheme
    />
    <ButtonGroup
      onPress={handleSortPress}
      selectedIndex={sortBy}
      buttons={sortButtons(ascendingSort, sortBy)}
      containerStyle={{ height: 30, marginTop: 20 }}
      selectedTextStyle={{ fontWeight: 'bold' }}
    />
    <TransactionList
      ascendingSort={ascendingSort}
      sortByKey={sortKeys[sortBy]}
      search={search}
    />
  </View>
);

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
