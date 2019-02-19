import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Services and Actions
import { launchRequest } from '../../../redux/modules/launch';

// Middleware

// Constants

// Utilities
import { isFetched, isLoading, isFailed } from '../../../util/stateHelpers';

// Component
import LaunchView from '../view/launchView';

/*
  *            Props Name        Description                                     Value
  *@props -->  props name here   description here                                Value Type Here
  *
  */

export class LaunchContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions
  componentWillMount() {
    const { launch, launchRequest: request } = this.props;

    if (!isFetched(launch)) {
      request(0);
    }
  }

  // Component Functions
  _handleLoadMore = () => {
    const { launch: { offset, total }, launchRequest: request } = this.props;

    if (offset + 1 < total) {
      request(offset + 1);
    }
  }

  render() {
    const { launch } = this.props;

    return <LaunchView launches={launch.launches} handleLoadMore={this._handleLoadMore} />;
  }
}

const mapStateToProps = state => ({
  launch: state.launch.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ launchRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LaunchContainer);
