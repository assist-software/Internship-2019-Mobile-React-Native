import React from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../utils/menuButtons';


export default class ExploreScreen extends React.Component {
    state = {
        data: []
    };
    componentWillMount(){
        this.fetchData();
    }
    fetchData = async () =>{
        const response = await fetch("http://www.json-generator.com/api/json/get/ceTOllpSUO?indent=2")
        const json = await response.json();
        this.setState(({data:json}))

    }
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
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={styles.fList}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('navGenreExploreList', {item : item.name})}>
                                <Image style={styles.img} source={images.rectangleBox}></Image>
                                <Text style={styles.genre}>{item.name}</Text>
                                <Text style={styles.nrMovies}>{item.movieNr}</Text>
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

