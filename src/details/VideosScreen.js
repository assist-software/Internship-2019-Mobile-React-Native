import React from 'react';
import { Text, Button, StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

export default class VideosScreen extends React.Component {

  render() {
    let movie = this.props.navigation.getParam('youtube');
    videoId = movie.split("=");
    return (
      <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <YouTube
          videoId={videoId[1].toString()}
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
        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
          <Image style={styles.backImg} source={imagesDetails.icon_back} />
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
  }
})