import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import menuImages from '../utils/menuButtons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import getDataFromAPI, {GenreExploreListAPI } from '../home/networkingHome/NetworkHome';
import moment from 'moment';

export default class WatchlistScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }

  async componentDidMount() {

    const data = await getDataFromAPI(GenreExploreListAPI);
    this.setState({ data });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Watchlist</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={styles.backIMG} source={menuImages.back} />
          </TouchableOpacity>

          <FlatList
              data={this.state.data}
              numColumns={2}
              renderItem={({ item }) =>
                  <View style={styles.fList}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie : item})}>
                      <Image style={styles.img} source={{uri: item.coverUrl}}/>
                    </TouchableOpacity>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Text style={styles.movieDate}>{moment.unix(Math.floor(parseInt(item.releaseDate)/1000)).format("DD/MM/YYYY")}</Text>
                  </View>
              } keyExtractor={(item, index) => index.toString()}
          />

        </View>
    );
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
  fList: {
    flex:1,
    marginHorizontal: 2,
    marginVertical: 1.8,
    marginBottom:1,
  },
  movieTitle:{
    width: wp('47%'),
    justifyContent: 'center',
    fontSize: 23,
    color: 'white',
    marginLeft:6,
    marginRight: 3,
  },
  movieDate:{
    justifyContent: 'center',
    marginLeft:6,
    fontSize: 15,
    color: 'grey',
  },
  backIMG: {
    position: 'absolute',
    width: wp('4%'),
    height: hp('4%'),
  },
  backBtn: {
    position: 'absolute',
    marginTop:45,
    marginLeft:12,
    width: wp('4%'),
    height: hp('4%'),
  },
  title: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'SF Pro Display',
    flexDirection: 'row',
    marginTop:41,
    alignSelf: 'center',
    marginBottom:22

  },
});