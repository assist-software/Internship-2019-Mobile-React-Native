import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <Text style={styles.myTextProfile}>My Profile</Text>
                <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={styles.backImg} source={imagesDetails.icon_back} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressImg} onPress={() => { this.props.navigation.navigate('Explore') }}>
                    <Image style={styles.logo} source={imagesDetails.img_profile} />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    myTextProfile: {
        fontSize: 18,
        color: 'white',
        top: 60,
        textAlign: 'center'
    },
    logo: {
        width: 140,
        height: 140,
        left: 120,
        top: 125,
        borderRadius: 140 / 2
    },
    pressImg: {
        top: 30,
        left: 16
    },
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 16
    },
    backImg: {
        width: 25,
        height: 25
    }
})
