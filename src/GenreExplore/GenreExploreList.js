import React from 'react';
import {  Text, View, FlatList, StyleSheet, TouchableOpacity, Image,TextInput} from 'react-native';
import menuImages from '../utils/menuButtons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Keyboard} from 'react-native';
import moment from 'moment';
import getDataFromAPI, { GenreExploreListAPI } from '../home/networkingHome/NetworkHome';

export default class GenreExploreList extends React.Component {

    title = this.props.navigation.getParam('item');
    originalData = [];
    constructor(props) {
        super(props);
        this.state = {
            dataBASE: [],
            error: null,
            text: "",
            loading: false,
            database: []
        };
    }

    async componentDidMount() {
        const apiData = await getDataFromAPI(GenreExploreListAPI);
        const dataBASE = apiData.filter(item => {
            return Array.from(item.category)
                .map(e => e.name)
                .includes(this.title)
        });

        this.originalData = dataBASE;
        this.setState({ dataBASE });
    }

    renderHeader = () => {
        return (
            <View style={styles.search}>
                <TextInput style={styles.searchText}
                           placeholder={'Search'}
                           placeholderTextColor='#9C9B9B'
                           onChangeText={text => this.searchFilterFunction(text)}
                           selectionColor="black"
                           underlineColorAndroid="black"
                />
            </View>
        );
    };

    searchFilterFunction = text => {
        if(!text) {
            this.setState({ data: this.originalData });
            return
        }

        const newData = this.state.dataBASE.filter(item => {
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) !== -1;
        });
        this.setState({ dataBASE: newData });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.title}</Text>
                <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={styles.backIMG} source={menuImages.back} />
                </TouchableOpacity>

                <FlatList
                    onScroll={() => {Keyboard.dismiss()}}
                    data={this.state.dataBASE}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.fList}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie : item})}>
                                <Image style={styles.img} source={{uri: item.coverUrl}}/>
                            </TouchableOpacity>
                            <Text style={styles.movieTitle}>{item.title}</Text>
                            <Text style={styles.movieDate}>{moment.unix(Math.floor(parseInt(item.releaseDate)/1000)).format("DD/MM/YYYY")}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
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
    },
    fList: {
        marginHorizontal: 2,
        marginVertical: 2,
        marginBottom:10,
        alignItems: 'center',
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
        fontSize: 15,
        color: 'grey',
        left:'1.5%',
        width: wp('47%'),
        marginLeft:6,
        marginRight: 3,
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
        marginTop:33,
        alignSelf: 'center',
        marginBottom:18

    },
    header:{
        backgroundColor:'black',
        fontSize: 25,
        color: 'white',
        fontFamily: 'SF Pro Display',
        marginBottom:-19,
    },
    search: {
        width: wp('90%'),
        height: hp('8%'),
        borderColor: 'gray',
        borderWidth : 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginBottom:30,
        marginTop:5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignSelf: 'center',
        color:'white',
        fontSize:28,
    },
    searchText: {
        fontSize:19,
        color:'#9C9B9B',
        marginHorizontal: 12,
        textDecorationLine : 'none',
    },
    searchActivity:{
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,

    },
});