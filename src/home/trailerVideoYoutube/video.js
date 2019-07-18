import React from 'react';
import YouTube from 'react-native-youtube';
import { View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/imagesHome'
export default class VideosScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ flex: 1 }}>
          <YouTube
            videoId="9NJj12tJzqc" // your tube video
            play={true}
            fullscreen={false}
            loop={true}
            apiKey="AIzaSyDauGqhDJw_ec8M1P5pOHikdVlcg5snCYc" // don't change it       
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300}}
          />
        </View>
        <View style={styles.logoStyle}>
          <Image source={images.moovie} style={styles.imageLogoStyle} />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create(
  {
    logoStyle:
    {
      height: 105,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    imageLogoStyle:
    {
      width: '55%',
      height: '47%'
    },
  }
)