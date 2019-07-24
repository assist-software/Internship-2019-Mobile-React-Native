import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import menuImages from '../../utils/menuButtons';
import getDataFromAPI, { moviesAPIUrl } from '../networkingHome/NetworkHome';
import moment from 'moment'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class SeeAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  async componentDidMount() {
    let objectApi = await getDataFromAPI(moviesAPIUrl);
    const currentUnixTime = Math.floor(Date.now()/1000);
    if (this.props.navigation.getParam('title') === "Coming Next")
      this.setState({
        isLoading: false,
        dataSource: objectApi.filter(mov => {
          if (Math.floor(parseInt(mov.releaseDate)/1000) > currentUnixTime) return true;
        }),
      })
      if (this.props.navigation.getParam('title') === "Recent Added")
      this.setState({
        isLoading: false,
        dataSource: objectApi.filter(mov => {
          if (Math.floor(parseInt(mov.releaseDate)/1000) <= currentUnixTime) return true;
        }),
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
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.navigation.getParam('title')}</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={styles.backIMG} source={menuImages.back} />
          </TouchableOpacity>
          <FlatList
            data={this.state.dataSource}
            numColumns={2}
            renderItem={({ item }) =>
              <View style={styles.fList}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie : item })}>
                  <Image style={styles.img} source={{ uri: item.coverUrl }}></Image>
                </TouchableOpacity>

                <Text style={styles.titluFilme}>{item.title}</Text>
                <Text style={styles.dataFilme}>{moment.unix(Math.floor(parseInt(item.releaseDate)/1000)).format("DD/MM/YYYY")}</Text>
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
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  titluFilme: {
    marginLeft: 4,
    marginRight: 3,
    fontSize: 23,
    color: 'white',

  },

  dataFilme: {
    marginRight: 3,
    fontSize: 15,
    color: 'grey',
    marginLeft: 4,

  }
});