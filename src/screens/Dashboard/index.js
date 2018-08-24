import React, { Component } from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { actionCreators } from '../../services/dashboard/duck';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
  static propTypes = {
    getTransactions: func.isRequired,
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  state = {
    sortBy: 1,
    search: null,
  };

  handleSortPress = index => {
    this.setState({
      sortBy: index,
    });
  };

  handleSearchInput = search => {
    this.setState({
      search,
    });
  };

  render() {
    const { sortBy, search } = this.state;
    return (
      <Dashboard
        handleSortPress={this.handleSortPress}
        handleSearchInput={this.handleSearchInput}
        sortBy={sortBy}
        search={search}
      />
    );
  }
}

const mapDispatchToProps = {
  getTransactions: actionCreators.getTransactionHistory,
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardContainer);
