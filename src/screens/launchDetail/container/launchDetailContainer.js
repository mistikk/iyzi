import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services and Actions
import { getLaunchStatus } from '../../../services/launchService';
import { setFavoriteItem, isMarkAsFavorite } from '../../../services/firebaseService';

// Middleware

// Constants

// Utilities

// Component
import LaunchDetailView from '../view/launchDetailView';

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class LaunchDetailContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('launchName', 'Launch Name'),
  });


  constructor(props) {
    super(props);
    this.state = {
      image: null,
      launchId: null,
      hashtag: null,
      status: null,
      isFavorite: false,
    };
  }

  // Component Life Cycle Functions
  componentWillMount() {
    const {
      navigation,
      launch: { launches },
    } = this.props;

    const launchId = navigation.getParam('launchId', null);
    if (launchId) {
      const launch = launches.find(item => item.id === launchId);
      let image = '';

      if (launch.rocket && launch.rocket.imageURL) {
        image = `${launch.rocket.imageURL.split('_')[0]}_${
          launch.rocket.imageSizes[0]
        }.jpg`;
      }

      const getLaunchPromise = getLaunchStatus(launch.status);
      const favoritePromise = isMarkAsFavorite(launchId);


      Promise.all([getLaunchPromise, favoritePromise]).then((res) => {
        this.setState({
          image,
          launchId,
          hashtag: launch.hashtag,
          status: res[0].types[0].description,
          isFavorite: res[1],
        });
      });
    }
  }

  // Component Functions
  _handleFavoriteButton = (launchId) => {
    const { isFavorite } = this.state;

    setFavoriteItem({ favorite: !isFavorite, id: launchId }).then(() => {
      this.setState({
        isFavorite: !isFavorite,
      });
    });
  }

  render() {
    const {
      image, launchId, hashtag, status, isFavorite,
    } = this.state;

    return (
      <LaunchDetailView
        image={image}
        launchId={launchId}
        hashtag={hashtag}
        status={status}
        isFavorite={isFavorite}
        handleFavoriteButton={this._handleFavoriteButton}
      />
    );
  }
}

const mapStateToProps = state => ({
  launch: state.launch.data,
});

export default connect(mapStateToProps)(LaunchDetailContainer);
