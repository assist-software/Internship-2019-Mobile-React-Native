import React from 'react';
import { Text, Button, StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

export default class VideosScreen extends React.Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <YouTube
        videoId="Of52MNnXoxU" // your tube video
        play={true}            
        fullscreen={false}       
        loop={true}    
        apiKey="AIzaSyDjn3zyTFnTUH_tqIalKwYHsjLzkf0Zwac" // don't change it       

        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}

        style={{ alignSelf: 'stretch', height: 300 }}
      />
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