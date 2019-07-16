import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class WatchlistScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Watchlist!</Text>     
      </View>
       </ScrollView>
    );
  }
}