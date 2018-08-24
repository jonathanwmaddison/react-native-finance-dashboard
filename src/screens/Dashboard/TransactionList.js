import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, number, string, arrayOf } from 'prop-types';
import { View, FlatList, Text } from 'react-native';
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
  };

  keyExtractor = (item) => item.transId.toString();

  render() {
    const { transactions } = this.props;
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
    transactions: getTransactionsState(state, props)
  }
};

export default connect(mapStateToProps)(TransactionList);
