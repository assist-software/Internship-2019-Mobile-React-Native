import React from 'react';
import { Text, StyleSheet, Image, Dimensions, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class LoginScreen extends React.Component {
   render() {
       // getParam from LoginScreen - page (when login page will be done....)
       //const movie = this.props.navigation.getParam('login');
       return (
           <View style={{ backgroundColor: 'black', flex: 1 }}>
               <Text style={styles.myTextProfile}>My Profile</Text>
               <TouchableOpacity style={styles.backBtn} onPress={() => { this.props.navigation.goBack() }}>
                   <Image style={styles.backImg} source={imagesDetails.icon_back} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.pressImg}>
                   <Image style={styles.logo} source={imagesDetails.img_profile} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.changephoto} onPress={() => { this.props.navigation.navigate('') }}>
                   <Text style={styles.changephoto}>Change Profile Photo</Text>
               </TouchableOpacity>
               <Text style={styles.encodedname}>Full Name</Text>
               <View style={styles.namefromapi}>
                   <Text style={styles.textinput}>Alexander Base</Text>
               </View>
               <Text style={styles.encodedtext}>Email address</Text>
               <View style={styles.namefromapi}>
                   <Text style={styles.textinput}>alexandrei@yahoo.com</Text>
               </View>
               <Text style={styles.encodedtext}>Password</Text>
               <View style={styles.namefromapi}>
                   <Text style={styles.textinput}>************</Text>
               </View>
           </View>
       );
   }
}
const styles = StyleSheet.create({
   myTextProfile: {
       fontSize: 20,
       color: 'white',
       marginTop: '10%',
       textAlign: 'center'
   },
   logo: {
       width: wp('37%'),
       height: hp('22%'),
       left: '27%',
       marginTop: '2%',
   },
   pressImg: {
       top: 30,
       left: 16
   },
   backBtn: {
       position: 'absolute',
       marginTop: '10%',
       left: 16
   },
   backImg: {
       width: 25,
       height: 25
   },
   changephoto: {
       fontSize: 15,
       fontStyle: 'normal',
       color: '#FFFFFF',
       textDecorationLine: 'underline',
       marginLeft: '18%',
       top: '5%',
   },
   encodedname: {
       fontSize: 20,
       fontStyle: 'normal',
       color: '#FFFFFF',
       left: 16,
       marginTop: '20%',
   },
   encodedtext: {
       fontSize: 20,
       fontStyle: 'normal',
       color: '#FFFFFF',
       left: 16,
       marginTop: '4%'
   },
   namefromapi:
   {
       left: '1%',
       width: wp('95%'),
       height: hp('7%'),
       borderColor: 'gray',
       borderWidth: 1,
       borderBottomLeftRadius: 10,
       borderBottomRightRadius: 10,
       borderTopLeftRadius: 10,
       borderTopRightRadius: 10,
       marginBottom: 10,
       marginTop: 7,
       alignSelf: 'center'
   },
   textinput: {
       fontSize: 22,
       color: '#ffffff',
       marginHorizontal: 18,
       textDecorationLine: 'none',
       marginTop: 6
   }
})