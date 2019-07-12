import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import WatchlistScreen from '../watchlist/WatchlistScreen';
import ExploreScreen from '../explore/ExploreScreen';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Details"
          onPress={() => { this.props.navigation.navigate('Details') }} />
      </View>
    );
  }
}