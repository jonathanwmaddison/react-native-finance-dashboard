import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import TransactionList from './TransactionList';

const sortKeys = {
  0: 'transAmt',
  1: 'transTime',
};

const Dashboard = ({ handleSortPress, handleSearchInput, sortBy, search }) => (
  <View style={{ flex: 1}}>
    <SearchBar
      onChangeText={handleSearchInput}
      placeholder="Search your transactions..."
      lightTheme
    />
    <ButtonGroup
      onPress={handleSortPress}
      selectedIndex={sortBy}
      buttons={['Sort Amount', 'Sort Date']}
      containerStyle={{ height: 30, marginTop: 20 }}
      selectedTextStyle={{ fontWeight: 'bold' }}
    />
    <TransactionList sortBy={sortKeys[sortBy]} search={search} />
  </View>
);

export default Dashboard;
