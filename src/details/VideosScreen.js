import React from 'react';
import { Text, Button, StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

export default class VideosScreen extends React.Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={{ backgroundColor: 'black', flex: 1}}>
        <YouTube
          videoId="Of52MNnXoxU" // youtube video key
          play={true}
          fullscreen={false}
          loop={true}
          apiKey="AIzaSyDjn3zyTFnTUH_tqIalKwYHsjLzkf0Zwac" // don't change it       

          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}

          style={{ alignSelf: 'stretch', height: 300, marginTop: 200 }}
        />
        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
          <Image style={styles.backImg} source={images.icon_back} />
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