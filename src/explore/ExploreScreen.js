import React from 'react';
import { Text, TextInput ,ScrollView, View, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import images from '../utils/menuButtons';


export default class ExploreScreen extends React.Component {

  genreArray = [
    {
      id:1,
      genre:'Adventure',
      nrMovies:25
    },
    {
      id:2,
      genre:'Comedy',
      nrMovies:55
    },
    {
      id:3,
      genre:'Drama',
      nrMovies:32
    },
    {
      id:4,
      genre:'Action',
      nrMovies:24
    },
    {
      id:5,
      genre:'Crime',
      nrMovies:15
    },
    {
      id:6,
      genre:'Documentary',
      nrMovies:39
    },
    {
      id:7,
      genre:'SF',
      nrMovies:15
    },
    {
      id:8,
      genre:'Romance',
      nrMovies:33
    },
    {
      id:9,
      genre:'Horror',
      nrMovies:19
    },
    {
      id:10,
      genre:'Thriller',
      nrMovies:38
    },
    {
      id:11,
      genre:'Fantasy',
      nrMovies:224
    },
    {
      id:12,
      genre:'War',
      nrMovies:45
    },
  ]

    constructor(props) {
      super(props)
        this.state = {
          value: ""
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }

handleChangeText(newText){
      this.setState({
    value: newText
      })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Explore</Text>

        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
          <Image style={styles.backIMG} source={images.back} />
        </TouchableOpacity>


<ScrollView>
            <View style={styles.search}>
                <TextInput style={styles.searchText}
                           defaultValue={"Search"}
                           onChangeText={this.handleChangeText}
                />
            </View>
</ScrollView>

          <FlatList
              data={this.genreArray}
              numColumns={2}
              renderItem={({ item }) =>
                  <View style={styles.fList}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item})}>
                      <Image style={styles.img} source={images.rectangleBox}></Image>
                      <Text style={styles.genre}>{item.genre}</Text>
                      <Text style={styles.nrMovies}>{item.nrMovies}</Text>
                    </TouchableOpacity>
                  </View>
              }keyExtractor={(item, index) => index.toString()}
          />
        </View>

    );
  }
}



const styles = StyleSheet.create({
  nrMovies:{
    fontSize: 25,
    color: 'white',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
    flexDirection: 'row',
    top:-80,
    left:10,
    marginBottom:-15
  },
  genre:{
    fontSize: 28,
    color: 'white',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
    flexDirection: 'row',
    top:-90,
    left:10,
    marginBottom:-15
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  img: {
    left: 10,
    top: 25,
    width: 188,
    height: 164,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  backIMG: {
    width:14,
    height:25,
  },
  backBtn: {
    left: 14,
    top: 8,
    width:22,
    height:22
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
    flexDirection: 'row',
    top:35,
  },
  search: {
      height: 50,
      borderColor: 'gray',
      borderWidth : 1,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      top: 30,
      marginBottom:39,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      width:'85%',
      alignSelf: 'center',
      color:'white',
      fontSize:28,
  },
  searchText: {
    fontSize:19,
    color:'white',
  },
  fList: {
    marginHorizontal: 4,
    marginVertical: -15,
  },
});