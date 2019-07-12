import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../utils/images';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ backgroundColor: 'black', flex: 1}}>
            <ScrollView>
                <View>
                <Image style={styles.img} source={images.test}/>
                <View style={styles.contentView}>
  
                </View>
                </View>
            </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      img: {
          width: '100%'
      },
      contentView: {
          marginTop: -50,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          height: 800,
          width: '100%',
          backgroundColor: 'black'
      }
  })