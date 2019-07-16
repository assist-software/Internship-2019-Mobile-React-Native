import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

export default class ExploreScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Details') }}>
          <Image style={styles.backImg} source={images.icon_back} />
          <Text style={styles.title}>Explore!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: 30,
    left: 16
  },
  backImg: {
    width: 25,
    height: 25
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    left: 16,
    bottom: -24,
    
  }
})