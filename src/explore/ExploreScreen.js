import React from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../utils/menuButtons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import getDataFromAPI, { ExploreScreenAPI } from '../home/networkingHome/NetworkHome';

export default class ExploreScreen extends React.Component {
    state = {
        data: []
    };
    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        const data = await getDataFromAPI(ExploreScreenAPI);
        this.setState({data})
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
                                <Image style={styles.img} source={images.rectangleBox}/>
                                <Text style={styles.genre}>{item.name}</Text>
                                <Text style={styles.nrMovies}>{item.count}</Text>
                            </TouchableOpacity>
                        </View>
                    }keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    fList: {
        marginHorizontal: 3,
        marginVertical:0.1,
        marginBottom: -68,
        left:'3.7%'
    },
    genre:{
        fontSize: 28,
        color: 'white',
        fontFamily: 'SF Pro Display',
        flexDirection: 'row',
        textAlign: 'center',
        position:'relative',
        top:"-60%"
    },
    nrMovies:{
        fontSize: 28,
        color: 'white',
        fontFamily: 'SF Pro Display',
        flexDirection: 'row',
        textAlign: 'center',
        position:'relative',
        top:'-62%',
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    img: {
        width: wp('47%'),
        height: hp('23%'),
        borderBottomLeftRadius: 19,
        borderBottomRightRadius: 19,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position:'relative'
    } ,
    backIMG: {
        position: 'absolute',
        width: wp('4%'),
        height: hp('4%'),
    },
    backBtn: {
        position: 'absolute',
        marginTop:45,
        marginLeft:12,
        width: wp('8%'),
        height: hp('6%'),
    },
    title: {fontSize: 23,
        color: 'white',
        fontFamily: 'SF Pro Display',
        flexDirection: 'row',
        marginTop:39,
        alignSelf: 'center',
        marginBottom:18

    },
    header:{
        backgroundColor:'black',
        fontSize: 25,
        color: 'white',
        fontFamily: 'SF Pro Display',
        marginBottom:5,
        paddingBottom: 2
    },
});

