import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import menuImages from '../../utils/menuButtons';
import getDataFromAPI, { moviesAPIUrl } from '../networkingHome/networkHome';
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
      const date = new Date().getDate(); //Current Date
      const month = new Date().getMonth() + 1; //Current Month
      const year = new Date().getFullYear(); //Current Year
      let structuredMovies = [];
      if (title === "Coming Next")
        for (let i = 0; i < this.state.dataSource.length; i++) {
          let dayMonthYear = this.state.dataSource[i].releaseDate.split("/");
          if (dayMonthYear[2] > year) structuredMovies.push(this.state.dataSource[i]);
          else if (dayMonthYear[1] > month) structuredMovies.push(this.state.dataSource[i]);
          else if (dayMonthYear[0] > date) structuredMovies.push(this.state.dataSource[i]);
        }
      else if (title === "Recent Added")
        for (let i = 0; i < this.state.dataSource.length; i++) {
          let dayMonthYear = this.state.dataSource[i].releaseDate.split("/");
          if (dayMonthYear[2] < year) structuredMovies.push(this.state.dataSource[i]);
          else if (dayMonthYear[1] < month) structuredMovies.push(this.state.dataSource[i]);
          else if (dayMonthYear[0] < date) structuredMovies.push(this.state.dataSource[i]);
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
    left: 10,
    top: 20,
    width: 188,
    height: 225,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
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
    marginHorizontal: 4,
    marginVertical: 16,
  },
  movieTitle: {
    left: 18,
    top: 25,
    fontSize: 23,
    color: 'white',
  },
  movieDate: {
    left: 18,
    top: 25,
    fontSize: 15,
    color: 'grey',
  }
});