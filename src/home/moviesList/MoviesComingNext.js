import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import getDataFromAPI, { moviesAPIUrl } from '../../home/networkingHome/NetworkHome';
export default class MoviesList1 extends Component {

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
            dataSource: objectApi,
        })
    }

    render() {
        
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        } else {
            const dateCurrent = new Date().getDate(); //Current Date
            const monthCurrent = new Date().getMonth() + 1; //Current Month, January == 0
            const yearCurrent = new Date().getFullYear(); //Current Year
            let structuredMovies = [];
            let k = -1;
            for (let i = 0; i < this.state.dataSource.length; i++) {
                let dataISO = new Date(parseInt(this.state.dataSource[i].releaseDate));
                let dd = dataISO.getDate();
                let mm = dataISO.getMonth() + 1; 
                let yyyy = dataISO.getFullYear();
                if (yyyy > yearCurrent) {
                    structuredMovies.push(this.state.dataSource[i]);
                    k += 1;
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    let today = dd + '/' + mm + '/' + yyyy;
                    structuredMovies[k].releaseDate = today;
                }
                else if (mm > monthCurrent) {
                    structuredMovies.push(this.state.dataSource[i]);
                    k += 1;
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    let today = dd + '/' + mm + '/' + yyyy;
                    structuredMovies[k].releaseDate = today;
                }
                else if (dd > dateCurrent) {
                    structuredMovies.push(this.state.dataSource[i]);
                    k += 1;
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    let today = dd + '/' + mm + '/' + yyyy;
                    structuredMovies[k].releaseDate = today;
                }
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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", { movie: val })}>
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
                <View style={styles.moviesListView1}>
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
            width:144.8,
            height:172,
            overflow:'hidden',
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
        moviesListView1:
        {
            flex: 1,
            flexDirection: 'row',
            marginLeft: 16,
            marginTop: 16,
            marginRight: 16,
            width: '100%'
        },
        movieDescriptionView:
        {
            width: 100,
        }
    }
)