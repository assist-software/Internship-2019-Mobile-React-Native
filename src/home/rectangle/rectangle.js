import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import getDataFromAPI, { moviesAPIUrl } from '../networkingHome/NetworkHome';
import { Dimensions } from 'react-native'
export default class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  async componentDidMount() {
    let objectApi = await getDataFromAPI(moviesAPIUrl);
    this.setState({
      isLoading: false,
      dataSource: objectApi[Math.floor(Math.random()*objectApi.length)],
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    else {
      let categories="";
      for (let i = 0; i < this.state.dataSource.category.length; i++) categories += this.state.dataSource.category[i].name + " ● ";
      categories+=this.state.dataSource.duration;
      return (
        <ImageBackground source={{ uri: this.state.dataSource.coverUrl }} style={styles.rectangleImageBackgroundStyle}>
          <View style={{ flex: 1, flexDirection: 'row' ,marginTop:30}}>
            <View style={{ flex: 3 , justifyContent:'flex-end',marginBottom:40,}}>
              <View>
                <Text style={styles.movieTextStyle}>
                  {this.state.dataSource.title}
                </Text>
              </View>
              <View>
                <Text style={styles.movieCategoryTextStyle}>
                  {categories}
                </Text>
              </View>
            </View>
            <View style={{ flex: 2 , justifyContent:'flex-end',marginBottom:40,}}>
              <TouchableOpacity style={styles.watchTrailerButtonStyle} onPress={() => this.props.navigation.navigate('Trailer_Home', {youtube:this.state.dataSource.trailerUrl})}>
                <Text style={styles.watchTrailerTextStyle}>Watch Trailer ►</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create(
  {
    rectangleImageBackgroundStyle:
    {
      marginTop: 53,
      marginBottom: 66,
      borderRadius:30,
      marginLeft:16,
      marginRight:16,
      overflow:'hidden'

    },
    movieTextStyle:
    {
      paddingLeft: 16,
      marginTop: 102,
      fontSize: 36*Math.round(Dimensions.get('window').width)/411,
      lineHeight: 40,
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
      fontSize: 13*Math.round(Dimensions.get('window').width)/411,
      lineHeight: 16
    },
    watchTrailerButtonStyle:
    {
      marginTop: 137,
      backgroundColor: 'white',
      borderRadius: 30.8965,
      alignItems: 'center',
      padding: 10,
      marginRight:16,
    },
    watchTrailerTextStyle:
    {
      color: 'black'
    },
  }
)