import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import colorPalette from './src/util/colorPalette';
import store from './src/state/store';
import Dashboard from './src/screens/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header
          backgroundColor={colorPalette.navy}
              centerComponent={{ text: 'Transaction History', style: { color: '#fff' } }}
          />
          <Dashboard />
        </View>
      </Provider>
    );
  }
};
