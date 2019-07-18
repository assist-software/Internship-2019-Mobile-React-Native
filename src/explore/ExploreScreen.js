import React from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
            text: "",
            show:true,
            showActivity:false
        };
        this.handleChangeText = this.handleChangeText.bind(this)
  }

    handleChangeText(newText){
        this.setState({
            text: newText
        })}
        render() {
            return (
                <ScrollView stickyHeaderIndices={[0]}
                            showsVerticalScrollIndicator={false}
                            style={styles.container}>
                    <View  style={styles.header}>
                        <Text style={styles.title}>Explore</Text>
                        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={styles.backIMG} source={images.back} />
                        </TouchableOpacity>
                    </View>
                        <FlatList
                            data={this.genreArray}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={styles.fList}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('navGenreExploreList', {item : item.genre})}>
                                        <Image style={styles.img} source={images.rectangleBox}></Image>
                                        <Text style={styles.genre}>{item.genre}</Text>
                                        <Text style={styles.nrMovies}>{item.nrMovies}</Text>
                                    </TouchableOpacity>
                                </View>
                            }keyExtractor={(item, index) => index.toString()}
                        />
                </ScrollView>

            );
        }
    }



    const styles = StyleSheet.create({
        nrMovies:{
            fontSize: 19,
            color: 'white',
            fontFamily: 'SF Pro Display',
            textAlign: 'center',
            flexDirection: 'row',
            top:-59,
            left:10,
            marginBottom:-10
        },
        genre:{
            fontSize: 28,
            color: 'white',
            fontFamily: 'SF Pro Display',
            textAlign: 'center',
            flexDirection: 'row',
            top:-70,
            left:10,
            marginBottom:-15
        },
        container: {
            flex: 1,
            backgroundColor: 'black'
        },
        img: {
            left: 10,
            top: 42,
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
            top: -18,
            width:22,
            height:22,
        },
        title: {
            fontSize: 23,
            color: 'white',
            fontFamily: 'SF Pro Display',
            flexDirection: 'row',
            top:25,
            left:169,
            marginBottom:19
        },
        header:{
            backgroundColor:'black',
            fontSize: 25,
            color: 'white',
            fontFamily: 'SF Pro Display',
            marginBottom:-19,
        },
        fList: {
            marginHorizontal: 4,
            marginVertical: -15,
        },
    });

