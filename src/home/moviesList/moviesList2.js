import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import images from '../../utils/imagesHome';
export default class moviesList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
        return (
            <View style={styles.moviesListView2}>
                <ScrollView horizontal={true}>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")} >
                                <Image source={list[0].image}  style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>{list[0].name}</Text>
                            <Text style={styles.movieDescription2Style}>{list[0].date}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={list[1].image} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>{list[1].name}</Text>
                            <Text style={styles.movieDescription2Style}>{list[1].date}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={list[0].image} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>{list[0].name}</Text>
                            <Text style={styles.movieDescription2Style}>{list[0].date}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={list[1].image} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>{list[1].name}</Text>
                            <Text style={styles.movieDescription2Style}>{list[1].date}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
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
            marginBottom: 155
        },
    }
)