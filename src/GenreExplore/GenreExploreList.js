import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image,TextInput} from 'react-native';
import menuImages from '../utils/menuButtons';
import {Keyboard} from 'react-native'

export default class GenreExploreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            text: "",
            viewSource: [],
            loading: false
        };
    }

    componentDidMount() {
        return fetch('http://www.json-generator.com/api/json/get/bZTksXwyDC?indent=2')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                        data :responseJson,
                        viewSource: responseJson,
                    },function() {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderHeader = () => {
        return (
            <View style={styles.search}>

                <TextInput style={styles.searchText}
                           underlineColorAndroid="transparent"
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
        const newData = this.state.data.filter(item => {
            if(!text)
            {
                return true;
            }
            const itemData = `${item.title.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) !== -1;
            return (typeof item.title === 'string') &&
                item.title.includes(text)

        });
        this.setState({ viewSource: newData });
    };

    render() {
        const title = this.props.navigation.getParam('item');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Explore') }}>
                    <Image style={styles.backIMG} source={menuImages.back} />
                </TouchableOpacity>

                <FlatList
                    onScroll={() => {Keyboard.dismiss()}}
                    data={this.state.viewSource}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.fList}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item})}>
                                <Image style={styles.img} source={{uri : item.image}}></Image>
                            </TouchableOpacity>
                            <Text style={styles.titluFilme}>{item.title}</Text>
                            <Text style={styles.dataFilme}>{item.date}</Text>
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
        marginBottom:30
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
        top: -23,
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
        marginBottom:35
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
        marginBottom:50,
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