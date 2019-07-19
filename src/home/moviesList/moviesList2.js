import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import images from '../../utils/imagesHome';

import getDataFromAPI, { moviesAPIUrl } from '../../home/networkingHome/networkHome';

export default class moviesList2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        };
    }
    async componentDidMount() {
        let movie = await getDataFromAPI(moviesAPIUrl);
        this.setState({
            isLoading: false,
            dataSource: movie.movies,
        })
    }
    render() {
        let list=[ 
            {
                name:'Godzilla',
                date:'19.09.2019',
                image:images.movie_logo1,
            },
            {
                name:'The Hustle',
                date:'10.05.2020',
                image:images.movie_logo2,
            }
        ]
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            let movies=this.state.dataSource.map((val,key)=>
            {
                    return (
                        <View key={key}>
                            <View key={key} style={{ marginRight: 12 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                    <Image source={list[0].image} style={styles.movieStyle} />
                                </TouchableOpacity>
                            </View>
                            <View key={key} style={styles.movieDescriptionView}>
                                <Text style={styles.movieDescription1Style}>{val.title}</Text>
                                <Text style={styles.movieDescription2Style}>{val.releaseYear}</Text>
                            </View>
                        </View>
                    )
            })
            return (
                <View style={styles.moviesListView2}>
                    <ScrollView horizontal={true}>
                        {movies}
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create(
    {
        movieStyle:
        {
            borderRadius: 20,
        },
        movieDescription1Style:
        {
            fontSize: 18,
            lineHeight: 18,
            letterSpacing: -0.08,
            color: "white",
            marginTop: 14
        },
        movieDescription2Style:
        {
            fontSize: 13,
            lineHeight: 18,
            letterSpacing: 0.08,
            color: "#979797",
        },
        moviesListView2:
        {
            flex: 1,
            flexDirection: 'row',
            marginLeft: 16,
            marginTop: 16,
            marginRight: 16,
            width: '100%',
            marginBottom: 105,
        },
        movieDescriptionView:
        {
            width:100,
        }
    }
)