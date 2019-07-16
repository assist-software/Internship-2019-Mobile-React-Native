import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import WatchlistScreen from '../watchlist/WatchlistScreen';
import ExploreScreen from '../explore/ExploreScreen';
import images from '../utils/images';
import Rectangle from '../rectangle/rectangle';
import Buttons1_5 from '../comingNextButtons/buttons0_4';
import MoviesList1 from '../moviesList/moviesList1';
import Buttons5_9 from '../recentAddedButtons/buttons4_7';
import MoviesList2 from '../moviesList/moviesList2';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoStyle}>
            <Image source={images.moovie} style={styles.imageLogoStyle} />
          </View>
          <View style={styles.watchAnywhereStyleView}>
            <Text style={styles.watchAnywhereStyleText}>
              Watch Anywhere.
              </Text>
          </View>
          <View style={styles.phraseStyleView}>
            <Text style={styles.phraseStyleText}>
              Keep up to date about what movies will be realesed in the next couple of months.
                </Text>
          </View>
          <Rectangle />
          <View style={styles.comingNextStyleView}>
            <View style={{ flex: 10 }}>
              <Text style={styles.comingNextTextStyle}>
                Coming Next
              </Text>
            </View>
            <View style={{ flex: 3 }}>
              <TouchableOpacity onPress={()=>this.props.navigate.navigation("Details")} >
                <Text style={styles.seeAllTextStyle}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <Buttons1_5 />
          <MoviesList1 navigation={this.props.navigation}/>
          <View style={styles.recentAddedViewStyle}>
            <View style={{ flex: 10 }}>
              <Text style={styles.recentAddedTextStyle}>
                Recent Added
              </Text>
            </View>
            <View style={{ flex: 3 }}>
              <TouchableOpacity >
                <Text style={styles.seeAllTextStyle}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <Buttons5_9/>
          <MoviesList2 navigation={this.props.navigation}/>
        </View>
      </ScrollView>



    );
  }
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      backgroundColor: 'black',
      width: '100%',
    },

    logoStyle:
    {
      height: 105,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageLogoStyle:
    {
      width: '55%',
      height: '47%'
    },
    watchAnywhereStyleView:
    {
      marginTop: 40,
      paddingLeft: 15,
    },
    watchAnywhereStyleText:
    {
      fontSize: 34,
      lineHeight: 60,
      letterSpacing: 0.41,
      color: 'white',
      fontWeight: 'bold'
    },
    phraseStyleView:
    {

    },
    phraseStyleText:
    {
      paddingLeft: 19,
      paddingRight: 115,
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: -0.88,
      color: '#979797'
    },
    comingNextStyleView:
    {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 15,

    },
    comingNextTextStyle:
    {
      paddingLeft: 16,
      fontSize: 34,
      lineHeight: 41,
      letterSpacing: 0.41,
      color: 'white',
      fontWeight: 'bold'
    },
    recentAddedViewStyle:
    {
      marginTop: 52,
      flex: 1,
      flexDirection: 'row',
      marginBottom: 15,
    },
    recentAddedTextStyle:
    {
      paddingLeft: 16,
      fontSize: 34,
      lineHeight: 41,
      letterSpacing: 0.41,
      color: 'white',
      fontWeight: 'bold'
    },
    seeAllTextStyle:
    {
      color: "#979797",
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: -0.08,
      textDecorationLine: 'underline',
      marginLeft: 18,
      marginTop: 15,
      textAlign: 'right',

    },
  }
)