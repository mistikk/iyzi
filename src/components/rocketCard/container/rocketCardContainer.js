import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

// Services and Actions

// Middleware

// Constants
import ROUTES from '../../../constants/routeNames';

// Utilities

// Component
import RocketCardView from '../view/rocketCardView';

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class RocketCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions
  _navigateRocketDetails = () => {
    const { navigation, id, title } = this.props;

    navigation.navigate(ROUTES.SCREENS.LAUNCH_DETAIL, { launchId: id, launchName: title });
  };

  render() {
    const {
      image, title, description,
    } = this.props;

    return (
      <RocketCardView
        image={image}
        title={title}
        description={description}
        handleOnClick={this._navigateRocketDetails}
      />
    );
  }
}

export default withNavigation(RocketCardContainer);
