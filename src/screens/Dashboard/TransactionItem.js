import React from 'react';
import moment from 'moment';
import currency from 'currency.js';
import { Card, Divider } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  date: {
    paddingBottom: 10,
  },
  divider: {
    marginBottom: 10,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsCard: {
    width: 200,
  },
  text: {
    flex: 1,
  },
});

const TransactionItem = ({
  transTime,
  transAmt,
  description,
  transTo,
  transFrom,
}) => (
  <Card style={{ flex: 1 }}>
    <Text style={styles.date}> {moment(transTime).format('MMMM Do')}</Text>
    <Divider style={styles.divider} />
    <View style={styles.transactionDetails}>
      <View style={styles.detailsCard}>
        <Text style={styles.text}>From {transFrom}</Text>
        <Text style={styles.text}>To {transTo} </Text>
      </View>
      <View style={styles.detailsCard}>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>
          {transAmt > 0
            ? '+' + currency(transAmt).format(true)
            : '-' + currency(transAmt * -1).format(true)}
        </Text>
      </View>
    </View>
  </Card>
);

export default TransactionItem;
