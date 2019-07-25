import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import getDataFromAPI, { moviesAPIUrl } from '../../home/networkingHome/NetworkHome';
import moment from 'moment'

export default class MoviesList2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        };
    }
    async componentDidMount() {
        let objectApi = await getDataFromAPI(moviesAPIUrl);
        const currentUnixTime = Math.floor(Date.now() / 1000);
        this.setState({
            isLoading: false,
            dataSource: objectApi.filter(mov => {
                if (Math.floor(parseInt(mov.releaseDate) / 1000) <= currentUnixTime) return true;
            })
        })
    }
    compare(a, b) {
        const releaseA = parseInt(a.releaseDate);
        const releaseB = parseInt(b.releaseDate);
        comparison = 0;
        if (releaseA > releaseB) {
            comparison = 1;
        } else if (releaseA < releaseB) {
            comparison = -1;
        }
        return comparison;
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
            let movies = this.state.dataSource.filter(movie => {
                let index = movie.category.findIndex(category => {
                    return (category.name == this.props.category);
                });
                return (index >= 0);
            }
            ).sort(this.compare).reverse().map((val, key) => {
                return (
                    <View key={key}>
                        <View style={styles.movieStyleView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", { movie: val })}>
                                <Image source={{ uri: val.coverUrl }} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.movieDescriptionView}>
                            <Text style={styles.movieDescription1Style}>{val.title}</Text>
                            <Text style={styles.movieDescription2Style}>{moment.unix(Math.floor(parseInt(val.releaseDate) / 1000)).format("DD/MM/YYYY")}</Text>
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
            width: 144.8,
            height: 172,
            overflow: 'hidden',
        },
        movieStyleView:
        {
            marginRight: 8,
            width: 144.8,
            height: 172,
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
            marginBottom: 100,
            marginTop: 16,
        },
        movieDescriptionView:
        {
            width: 100,
        }
    }

)