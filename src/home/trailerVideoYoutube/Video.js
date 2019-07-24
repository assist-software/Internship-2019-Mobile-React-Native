import React from 'react';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import images from '../../utils/imagesHome'
import { Dimensions } from 'react-native'

export default class VideosScreen extends React.Component {
  youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }
  render() {
    videoId = this.youtube_parser(this.props.navigation.getParam("youtube"))
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{  //Here is DrawerNavigator 
          height: 48,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#F5044C'
        }}>
          <TouchableOpacity style={{ marginLeft: 12, }}
            onPress={() => { this.props.navigation.goBack() }}>
            <Icon name="ios-arrow-back" color={'white'} size={35} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <YouTube
            videoId={videoId}
            play={true}
            fullscreen={true}
            loop={true}
            apiKey="AIzaSyDauGqhDJw_ec8M1P5pOHikdVlcg5snCYc" // don't change it       
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
        </View>
        <View style={styles.logoStyle}>
          <Image source={images.moovie} style={styles.imageLogoStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    logoStyle:
    {
      height: 105,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageLogoStyle:
    {
      resizeMode: 'contain',
      height: Math.round(Dimensions.get('window').height) * 0.104 * 4.67,
      width: Math.round(Dimensions.get('window').width) * 0.185 * 2.63,
    },
  }
)