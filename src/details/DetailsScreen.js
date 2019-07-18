import React from 'react';
import { Text, FlatList, View, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import images from '../utils/imagesDetails';
//import getMoviesFromSever from '../networking/network';

export default class DetailsScreen extends React.Component {
    // Movie description
    // data = {
    //     title: " The hustle ",
    //     description: "Josephine Chesterfield is a glamorous, seductive " +
    //         " British woman who has a penchant for defrauding gullible men out of their money." +
    //         " \n\n Into her well-ordered, meticulous world comes Penny Rust, a cunning and fun-loving" +
    //         " Australian woman who lives to swindle unsuspecting marks. Despite their different " +
    //         " methods, the two grifters soon join forces for the ultimate score -- a young and naive " +
    //         " tech billionaire in the South of France. \n\n\n\ ",
    //     director: " Chris Addison ",
    //     writers: " Stanley Shapiro (screenplay by), Paul Henning (screenplay by) ",
    //     name: " Anne Hathaway, Rebel Wilson \n\n\ "
    // }

    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            dataSource: null,
            movie: {}
        }
    }

    componentDidMount() {
        return fetch('http://www.json-generator.com/api/json/get/bUHpXqWbAO?indent=2')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movie,
                    movie: responseJson
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderPictures() {
        let pics = [];
        for (let i = 0; i < 6; i++) {
            const image = images['img_' + (i + 1)]
            pics.push(
                <TouchableOpacity style={styles.item_picture} key={pics}
                    onPress={() => { this.props.navigation.navigate('FullImage', { image }) }}>
                    <Image
                        source={image}
                        style={styles.img} />
                </TouchableOpacity>)
        }
        return pics;
    }

    render() {
        let pics = this.renderPictures()
        const {movie} = this.state;
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <ScrollView>
                    <View>
                        <Image style={styles.img} source={images.background_img} />
                        <View style={styles.contentView}>
                            <Text style={styles.title}>{movie.title}</Text> 
                            <Image style={styles.img2} source={images.imdb} />
                            <Text style={styles.date}>{movie.date}</Text>
                            <Text style={styles.description}>{movie.description}</Text>
                            <Text style={styles.personal}>Director:</Text>
                            <Text style={styles.directorname}>{movie.director}</Text>
                            <Text style={styles.personal}>Writers:</Text>
                            <Text style={styles.writersname}>{movie.writers}</Text>
                            <Text style={styles.personal}>Actors:</Text>
                            <Text style={styles.actorsname}>{movie.name}</Text>
                            <View style={styles.pictures}>
                                {pics}
                            </View>
                        </View>
                        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Home') }}>
                            <Image style={styles.backImg} source={images.icon_back} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn} onPress={() => { this.props.navigation.navigate('MyProfile') }}>
                            <Image style={styles.addImg} source={images.icon_add} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.playBtn} onPress={() => { this.props.navigation.navigate('Trailer_Details') } }>

                            <Image style={styles.playImg} source={images.play} />
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    playImg: {
        width: 80,
        height: 80
    },
    addBtn: {
        position: 'absolute',
        top: 30,
        left: 365
    },
    addImg: {
        width: 25,
        height: 25
    },
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 16
    },
    backImg: {
        width: 25,
        height: 25
    },
    playBtn: {
        position: 'absolute',
        top: Dimensions.get('window').width / 2 - 40,
        left: (Dimensions.get('window').width / 2) - 40
    },
    img: {
        width: '100%'
    },
    contentView: {
        marginTop: -50,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        width: '100%',
        backgroundColor: 'black'
    },
    img2: {
        width: '27%',
        left: 212
    },
    title: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        left: 16,
        height: 41,
        bottom: -24
    },
    personal:{
        fontSize: 14,
        fontStyle: 'normal',
        color: '#979797',
        left: 16,
        bottom: -15
    },
    date: {
        fontSize: 14,
        fontStyle: 'normal',
        color: '#979797',
        left: 16,
        bottom: -15
    },
    description: {
        fontSize: 15,
        color: '#ffffff',
        left: 16,
        bottom: -43,
        textAlign: 'auto',
        lineHeight: 27
    },
    directorname: {
        fontSize: 15,
        color: '#ffffff',
        left: 140,
        bottom: 8,
        textAlign: 'auto',
        lineHeight: 27,
    },
    writersname: {
        fontSize: 15,
        color: '#ffffff',
        left: 140,
        bottom: 8,
        lineHeight: 27
    },
    actorsname: {
        fontSize: 15,
        color: '#ffffff',
        left: 140,
        bottom: 8,
        lineHeight: 27
    },
    item_picture: {
        width: '33%',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    pictures: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

