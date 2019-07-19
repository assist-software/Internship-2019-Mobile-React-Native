import React from 'react';
import { Text, FlatList, View, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import images from '../utils/imagesDetails';
import getDataFromAPI, { moviesAPIUrl } from '../networking/network';

export default class DetailsScreen extends React.Component {

    apiImages = [
        {
            url: 'https://m.media-amazon.com/images/M/MV5BMTc3MDcyNzE5N15BMl5BanBnXkFtZTgwNzE2MDE0NzM@._V1_.jpg'
        }, {
            url: 'https://i.ytimg.com/vi/tUt-_P_ruM4/maxresdefault.jpg'
        },{
            url: 'https://m.media-amazon.com/images/M/MV5BMTc3MDcyNzE5N15BMl5BanBnXkFtZTgwNzE2MDE0NzM@._V1_.jpg'
        },
        {
            url: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2019/05/CAJS136-59_2019_021531.jpg'
        }, {
            url: 'https://m.media-amazon.com/images/M/MV5BNTM1MzI4NjM1M15BMl5BanBnXkFtZTgwMzc2MDE0NzM@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
        },{
            url: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2019/05/CAJS136-59_2019_021531.jpg'
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: {}
        }
    }

    async componentDidMount() {
        let movie = await getDataFromAPI(moviesAPIUrl)
        this.setState({movie})
    }

    renderPictures() {
        let pics = [];
        for (let i = 0; i < this.apiImages.length; i++) {
            const image = this.apiImages[i].url
            pics.push(
                <TouchableOpacity style={styles.item_picture} key={pics}
                    onPress={() => { this.props.navigation.navigate('FullImage', { image }) }}>
                    <Image source={{uri: image}} style={styles.img} />
                </TouchableOpacity>)
        }
        return pics;
    }

    render() {
        let pics = this.renderPictures()
        const { movie } = this.state;
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <ScrollView>
                    <View>
                        <Image style={styles.imgLogo} source={{uri: movie.image_logo}} />
                        <View style={styles.contentView}>
                            <Text style={styles.title}>{movie.title}</Text>
                            <Image style={styles.img2} source={images.imdb} />
                            <Text style={styles.date}>{movie.date}</Text>
                            <Text style={styles.description}>{movie.description}</Text>
                            <Text style={styles.personal}>Director:</Text>
                            <Text style={styles.name}>{movie.director}</Text>
                            <Text style={styles.personal}>Writers:</Text>
                            <Text style={styles.name}>{movie.writers}</Text>
                            <Text style={styles.personal}>Actors:</Text>
                            <Text style={styles.name}>{movie.name}</Text>
                            <View style={styles.pictures}>{pics}</View>
                        </View>
                        <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.navigate('Home') }}>
                            <Image style={styles.backImg} source={images.icon_back} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn} onPress={() => { this.props.navigation.navigate('MyProfile') }}>
                            <Image style={styles.addImg} source={images.icon_add} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.playBtn} onPress={() => { this.props.navigation.navigate('Trailer_Details') }}>

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
        right: 20

    },
    addImg: {
        width: 25,
        resizeMode: 'contain',
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
        top: Dimensions.get('window').width / 2 - 120,
        left: (Dimensions.get('window').width / 2) - 40
    },
    imgLogo: {
        resizeMode: 'cover',
        width: '100%',
        height: 300
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: 100,
        bottom: -20
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
        left: 212,
    },
    title: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        left: 16,
        height: 41,
        bottom: -24
    },
    personal: {
        fontSize: 14,
        fontStyle: 'normal',
        color: '#979797',
        left: 16,
        bottom: -20,
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
    name: {
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 90,
        marginRight: 10,
        textAlign: 'auto'
    },
    item_picture: {
        resizeMode: 'cover',
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

