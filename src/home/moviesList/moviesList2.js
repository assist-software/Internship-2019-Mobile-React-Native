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
        let objectApi = await getDataFromAPI(moviesAPIUrl);
        this.setState({
            isLoading: false,
            dataSource: objectApi
        })
    }
    render() {

        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            const date = new Date().getDate(); //Current Date
            const month = new Date().getMonth() + 1; //Current Month
            const year = new Date().getFullYear(); //Current Year
            let structuredMovies = [];
            for (let i = 0; i < this.state.dataSource.length; i++) {
                let dayMonthYear = this.state.dataSource[i].releaseDate.split("/");
                if (dayMonthYear[2] < year) structuredMovies.push(this.state.dataSource[i]);
                else if (dayMonthYear[1] < month) structuredMovies.push(this.state.dataSource[i]);
                else if (dayMonthYear[0] <= date) structuredMovies.push(this.state.dataSource[i]);
            }
            let movies = structuredMovies.filter(movie => {
                let index = movie.category.findIndex(category => {
                    return (category.name == this.props.category);
                });
                return (index >= 0);
            }
            ).map((val, key) => {
                return (
                    <View key={key}>
                        <View key={key} style={styles.movieStyleView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", movie = { val })}>
                                <Image source={{ uri: val.coverUrl }} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View key={key} style={styles.movieDescriptionView}>
                            <Text style={styles.movieDescription1Style}>{val.title}</Text>
                            <Text style={styles.movieDescription2Style}>{val.releaseDate}</Text>
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
            width: '100%',
            height: '100%'
        },
        movieStyleView:
        {
            marginRight: 12,
            width: 128,
            height: 152
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
            marginRight: 16,
            width: '100%',
            marginBottom:100 ,
            marginTop: 16,
        },
        movieDescriptionView:
        {
            width: 100,
        }
    }

)