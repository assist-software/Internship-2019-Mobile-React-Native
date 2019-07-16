import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../utils/imagesHome';
export default class rectangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.rectangleViewStyle}>
        <ImageBackground source={images.rectangle} style={styles.rectangleImageBackgroundStyle}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <View>
                <Text style={styles.movieTextStyle}>
                  Moonlight
                 </Text>
              </View>
              <View>
                <Text style={styles.movieCategoryTextStyle}>
                  Comedy ● Crime ● 1h 33min
                </Text>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <TouchableOpacity style={styles.watchTrailerButtonStyle}>
                <Text style={styles.watchTrailerTextStyle}>Watch Trailer ► </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create(
    {
        rectangleViewStyle:
        {
          height: 202,
          width: 363,
          marginLeft: 16,
          marginRight: 16,
          marginTop: 53,
          marginBottom: 65,
    
        },
        rectangleImageBackgroundStyle:
        {
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 20,
          marginLeft: 7
    
        },
        movieTextStyle:
        {
          paddingLeft: 16,
          marginTop: 102,
          fontSize: 36,
          lineHeight: 60,
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        },
        movieCategoryTextStyle:
        {
          paddingLeft: 16,
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          fontSize: 13,
          lineHeight: 16
        },
        watchTrailerButtonStyle:
        {
          marginTop: 137,
          backgroundColor: '#FFFFFF',
          borderRadius: 30.8965,
          alignItems: 'center',
          padding: 10
        },
        watchTrailerTextStyle:
        {
          color: 'black'
        },
    }
)