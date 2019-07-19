import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import images from '../../utils/imagesHome';
export default class rectangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  rectangle={
    image:images.rectangle,
    title:'Moonlight',
    genre:'Comedy ● Crime ● 1h 33min'
  }
  
  render() {
    
    return (
        <ImageBackground source={this.rectangle.image} style={styles.rectangleImageBackgroundStyle}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <View>
                <Text style={styles.movieTextStyle}>
                  {this.rectangle.title}
                 </Text>
              </View>
              <View>
                <Text style={styles.movieCategoryTextStyle}>
                  {this.rectangle.genre}
                </Text>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <TouchableOpacity style={styles.watchTrailerButtonStyle} onPress={()=>this.props.navigation.navigate('Trailer_Home')}>
                <Text style={styles.watchTrailerTextStyle}>Watch Trailer ► </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(
  {
    rectangleImageBackgroundStyle:
    {
      marginTop:53,
      marginBottom:66,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 20,
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