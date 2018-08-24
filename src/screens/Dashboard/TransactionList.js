import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, number, string, arrayOf, bool } from 'prop-types';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import TransactionItem from './TransactionItem';
import { getTransactionsState } from './selectors';

export class TransactionList extends Component {
  static propTypes = {
    transactions: arrayOf(
      shape({
        transId: number.isRequired,
        custId: number.isRequired,
        transTime: number.isRequired,
        description: string.isRequired,
        transTo: string.isRequired,
        transFrom: string.isRequired,
      }).isRequired
    ),
    ascendingSort: bool.isRequired,
    sortByKey: string.isRequired,
    search: string
  };

  static defaultProps = {
    search: null
  }

  keyExtractor = (item) => item.transId.toString();

  render() {
    const { transactions, isFetching } = this.props;
    if (isFetching) {
      return <ActivityIndicator />
    }
    return (
      <View style={{ flex: 1}}>
        <FlatList
          data={transactions}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TransactionItem
              {...item}
            />
          )}
        />
        </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    transactions: getTransactionsState(state, props),
    isFetching: state.dashboard.isFetching
  }
};

export default connect(mapStateToProps)(TransactionList);
