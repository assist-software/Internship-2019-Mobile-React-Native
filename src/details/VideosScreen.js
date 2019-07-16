import React from 'react';
import { Text, Button, StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

export default class VideosScreen extends React.Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container_video}>
        <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          style={styles.backgroundVideo} controls={true} />
          <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Explore') }}>
          <Image style={styles.backImg} source={images.icon_back} />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_video: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  backBtn: {
    position: 'absolute',
    top: 30,
    left: 16
  },
  backImg: {
    width: 25,
    height: 25
  }
});