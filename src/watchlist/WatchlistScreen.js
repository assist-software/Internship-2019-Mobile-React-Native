import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import images from '../utils/imagesWL';
import menuImages from '../utils/menuButtons';



export default class WatchlistScreen extends React.Component {

  dataArray = [
    {
      id: 1,
      title: "Exemplu titlu",
      image: images.test1,
      date: "15/07/2019"
    },
    {
      id: 2,
      title: "Exemplu titlu",
      image: images.test2,
      date: "15/07/2019"
    },
    {
      id: 3,
      title: "Exemplu titlu",
      image: images.test3,
      date: "15/07/2019"
    },
    {
      id: 4,
      title: "Exemplu titlu",
      image: images.test4,
      date: "15/07/2019"
    },
    {
      id: 5,
      title: "Exemplu titlu",
      image: images.test5,
      date: "15/07/2019"
    },
    {
      id: 6,
      title: "Exemplu titlu",
      image: images.test6,
      date: "15/07/2019"
    },
    {
      id: 7,
      title: "Exemplu titlu",
      image: images.test1,
      date: "15/07/2019"
    },
    {
      id: 8,
      title: "Exemplu titlu",
      image: images.test3,
      date: "15/07/2019"
    },
    {
      id: 9,
      title: "Exemplu titlu",
      image: images.test2,
      date: "15/07/2019"
    },
    {
      id: 10,
      title: "Exemplu titlu",
      image: images.test5,
      date: "15/07/2019"
    },
    {
      id: 11,
      title: "Exemplu titlu",
      image: images.test6,
      date: "15/07/2019"
    },
    {
      id: 12,
      title: "Exemplu titlu",
      image: images.test4,
      date: "15/07/2019"
    }
  ]

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Watchlist</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={styles.backIMG} source={menuImages.back} />
          </TouchableOpacity>
          <FlatList
              data={this.dataArray}
              numColumns={2}
              renderItem={({ item }) =>
                  <View style={styles.fList}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item})}>
                      <Image style={styles.img} source={item.image}></Image>
                    </TouchableOpacity>

                    <Text style={styles.titluFilme}>{item.title}</Text>
                    <Text style={styles.dataFilme}>{item.date}</Text>
                  </View>
              }keyExtractor={(item, index) => index.toString()}
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
    width:18,
    height:25,
  },
  backBtn: {
    left: 10,
    top: -16,
    width:22,
    height:22
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
    flexDirection: 'row',
    top:12,
  },
  fList: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  titluFilme:{
    left:18,
    top:25,
    fontSize: 23,
    color: 'white',
  },
  dataFilme:{
    left:18,
    top:25,
    fontSize: 15,
    color: 'grey',
  }
});