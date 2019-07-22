import React from 'react';
import { Text, Button, StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default class FullImageScreen extends React.Component {
    render() {
        const image = this.props.navigation.getParam('image')
        return (
            <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={styles.backImg} source={images.icon_back} />
                </TouchableOpacity>
                <Image style={styles.img} source={{uri: image}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 16
    },
    backImg: {
        width: 25,
        height: 25
    },
    img: {
        resizeMode: 'contain',
        width: "100%",
        height: '80%'
    }
})