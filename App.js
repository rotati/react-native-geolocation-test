/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latText: "Here be lat",
      lonText: "Here be lon"
    };
  }

  _getLatLon() {
    navigator.geolocation.getCurrentPosition((initialPosition) => {
      this.setState({latText: initialPosition.coords.latitude})
      this.setState({lonText: initialPosition.coords.longitude})
      console.log("******** Lat: ", initialPosition.coords.latitude)
    },
    error => {
      alert(error.message);
    },
    { timeout: 20000, maximumAge: 0, enableHighAccuracy: true }
    );
  }

  render() {
    return (
      <View>
        <Button
          onPress={this._getLatLon.bind(this)}
          title="Get yer location..."
          color="#841584"
        />
        <Text style={styles.textStyle}>
          {this.state.latText}{'\n'}
          {this.state.lonText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28
  },
});