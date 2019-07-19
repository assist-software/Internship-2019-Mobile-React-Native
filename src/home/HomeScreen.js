import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import images from '../utils/imagesHome';
import Buttons1_5 from '../home/comingNextButtons/buttons0_4';
import Rectangle from '../home/rectangle/rectangle';
import MoviesList1 from '../home/moviesList/moviesList1';
import Buttons5_9 from '../home/recentAddedButtons/buttons4_7';
import MoviesList2 from '../home/moviesList/moviesList2';
import {Dimensions} from 'react-native'
export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            <Rectangle navigation={this.props.navigation} />
            <View style={styles.comingNextStyleView}>
              <View style={{ flex: 10 }}>
                <Text style={styles.comingNextTextStyle}>
                  Coming Next
              </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ListMovies", {title:'Coming Next'})}>
                  <Text style={styles.seeAllTextStyle}>
                    See All
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
            <Buttons1_5 />
           
            <MoviesList1 navigation={this.props.navigation} />
            <View style={styles.recentAddedViewStyle}>
              <View style={{ flex: 15 }}>
                <Text style={styles.recentAddedTextStyle}>
                  Recent Added
              </Text>
              </View>
              <View style={{ flex: 4 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ListMovies", {title:'Recent Added'})}>
                  <Text style={styles.seeAllTextStyle}>
                    See All
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
            <Buttons5_9 />
            <MoviesList2 navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </View>



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
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:-(Math.round(Dimensions.get('window').height)/18.285*2.811),
      marginBottom:-(Math.round(Dimensions.get('window').height)/16.695*2.811),
    },
    imageLogoStyle:
    {
      resizeMode:'contain',
      height:Math.round(Dimensions.get('window').height)*0.104*4.67,
      width:Math.round(Dimensions.get('window').width)*0.185*2.63,
      
    },
    watchAnywhereStyleView:
    {
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