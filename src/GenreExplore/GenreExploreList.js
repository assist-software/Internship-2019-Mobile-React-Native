import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image,TextInput,ActivityIndicator} from 'react-native';
import images from '../utils/imagesWL';
import menuImages from '../utils/menuButtons';



export default class GenreExploreList extends React.Component {

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
    ];

    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)})
    }


    render() {
        const title = this.props.navigation.getParam('item');
        //let filteredMovies = this.props.movies
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.search}>

                    <TextInput style={styles.searchText}
                               underlineColorAndroid="transparent"
                               placeholder={'Search'}
                               placeholderTextColor='#9C9B9B'

                    />
                </View>

                <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Explore') }}>
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
    },
    backIMG: {
        width:14,
        height:25,
    },
    backBtn: {
        left: 14,
        top: -102,
        width:22,
        height:22,
    },
    title: {
        fontSize: 23,
        color: 'white',
        fontFamily: 'SF Pro Display',
        flexDirection: 'row',
        top:38,
        alignSelf: 'center',
        marginBottom:19
    },
    header:{
        backgroundColor:'black',
        fontSize: 25,
        color: 'white',
        fontFamily: 'SF Pro Display',
        marginBottom:-19,

    },
    search: {
        height: 50,
        borderColor: 'gray',
        borderWidth : 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        top: 50,
        marginBottom:39,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width:'85%',
        alignSelf: 'center',
        color:'white',
        fontSize:28,
        marginTop: 5,

    },
    searchText: {
        fontSize:19,
        color:'#9C9B9B',
        marginHorizontal: 12,
        textDecorationLine : 'none',
    },
    searchActivity:{
        alignSelf: 'center',
        top:100,
        justifyContent: 'center',
        padding: 10,

    },


});