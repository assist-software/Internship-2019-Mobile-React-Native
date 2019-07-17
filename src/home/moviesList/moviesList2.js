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
        return (
            <View style={styles.moviesListView2}>
                <ScrollView horizontal={true}>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")} >
                                <Image source={images.movie_logo1} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>Godzilla</Text>
                            <Text style={styles.movieDescription2Style}>19.09.2019</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={images.movie_logo2} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>The Hustle</Text>
                            <Text style={styles.movieDescription2Style}>10.05.2020</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={images.movie_logo1} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>Godzilla</Text>
                            <Text style={styles.movieDescription2Style}>19.09.2019</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                                <Image source={images.movie_logo2} style={styles.movieStyle} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.movieDescription1Style}>The Hustle</Text>
                            <Text style={styles.movieDescription2Style}>10.05.2020</Text>
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