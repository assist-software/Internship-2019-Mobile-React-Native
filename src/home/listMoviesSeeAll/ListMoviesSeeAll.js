import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import menuImages from '../../utils/menuButtons';
import getDataFromAPI, { moviesAPIUrl } from '../networkingHome/NetworkHome';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class WatchlistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  async componentDidMount() {
    let objectApi = await getDataFromAPI(moviesAPIUrl);
    this.setState({
      isLoading: false,
      dataSource: objectApi,
    })
  }


  render() {
    if (this.state.isLoading)
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    else {
      let title = this.props.navigation.getParam('title');
      const dateCurrent = new Date().getDate(); //Current Date
      const monthCurrent = new Date().getMonth() + 1; //Current Month
      const yearCurrent = new Date().getFullYear(); //Current Year
      let structuredMovies = [];
      let k = -1;
      if (title === "Coming Next")
        for (let i = 0; i < this.state.dataSource.length; i++) {
          let dataISO = new Date(parseInt(this.state.dataSource[i].releaseDate));
          let dd = dataISO.getDate();
          let mm = dataISO.getMonth() + 1; //January is 0!
          let yyyy = dataISO.getFullYear();
          if (yyyy > yearCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[k].releaseDate = today;
          }
          else if (mm > monthCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[k].releaseDate = today;
          }
          else if (dd > dateCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[k].releaseDate = today;
          }
        }
      else if (title === "Recent Added")
        for (let i = 0; i < this.state.dataSource.length; i++) {
          let dataISO = new Date(parseInt(this.state.dataSource[i].releaseDate));
          let dd = dataISO.getDate();
          let mm = dataISO.getMonth() + 1; //January is 0!
          let yyyy = dataISO.getFullYear();
          if (yyyy <= yearCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[i].releaseDate = today;
          }
          else if (mm <= monthCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[i].releaseDate = today;
          }
          else if (dd <= dateCurrent) {
            structuredMovies.push(this.state.dataSource[i]);
            k += 1;
            if (dd < 10) {
              dd = '0' + dd;
            }
            if (mm < 10) {
              mm = '0' + mm;
            }
            let today = dd + '/' + mm + '/' + yyyy;
            structuredMovies[i].releaseDate = today;
          }
        }
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={styles.backIMG} source={menuImages.back} />
          </TouchableOpacity>
          <FlatList
            data={structuredMovies}
            numColumns={2}
            renderItem={({ item }) =>
              <View style={styles.fList}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { item })}>
                  <Image style={styles.img} source={{ uri: item.coverUrl }}></Image>
                </TouchableOpacity>

                <Text style={styles.titluFilme}>{item.title}</Text>
                <Text style={styles.dataFilme}>{item.releaseDate}</Text>
              </View>
            } keyExtractor={(item, index) => index.toString()}
          />

        </View>
      );

    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  img: {
    width: wp('48%'),
    height: hp('35%'),
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIMG: {
    width: 18,
    height: 25,
  },
  backBtn: {
    left: 10,
    top: -16,
    width: 22,
    height: 22
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
    flexDirection: 'row',
    top: 12,

  },
  fList: {
    flex:1,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  titluFilme: {
    marginLeft:4,
    marginRight: 3,
    fontSize: 23,
    color: 'white',

  },

  dataFilme: {
    marginRight: 3,
    fontSize: 15,
    color: 'grey',
    marginLeft:4,

  }
});