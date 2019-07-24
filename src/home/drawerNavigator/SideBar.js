import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import images from '../../utils/imagesSidebar';
import TextInputs from './Textinputs'

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Log into",
      text2: "your account",
      buttonText: 'Log In',
      textUnderButton: "Don't have an accout? ",
      textUnderButtonUnderline: "Let's create one",
      textUnderInput: "Forgot Password?",
      maintext2Style:
      {
        color: 'white',
        fontSize: 24,
        lineHeight: 29,
        display: 'flex',
      },
    };
  }

  _forgot() {
    this.setState({
      text1: "Reset your password",
      text2: "We will send you over email the instructions in order to get your password reseted",
      buttonText: 'Reset Password',
      textUnderButton: "Already have an account? ",
      textUnderButtonUnderline: "Log In",
      textUnderInput: "",
      maintext2Style:
      {
        color: '#9C9B9B',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
      },
    })
  }
  _create(text) {
    this.setState(
      {
        text1: "Let's create",
        text2: "your account",
        buttonText: 'Register',
        textUnderButton: "Already have an account? ",
        textUnderButtonUnderline: "Log In",
        textUnderInput: "",
      }
    )
    if (text === "Log In") {
      this.setState({
        text1: "Log into",
        text2: "your account",
        buttonText: 'Log In',
        textUnderButton: "Don't have an accout? ",
        textUnderButtonUnderline: "Let's create one",
        textUnderInput: "Forgot Password?",
        maintext2Style:
        {
          color: 'white',
          fontSize: 24,
          lineHeight: 29,
          display: 'flex',
        },
      })
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <ImageBackground source={images.background} style={styles.imageBackgroundStyle}>
          <View style={styles.logoStyleView}>
            <Image source={images.moovie} style={styles.logoStyleImage} />
          </View>
          <View style={styles.mainTextStyle}>
            <Text style={styles.maintext1Style}>
              {this.state.text1}
            </Text>
            <Text style={[this.state.maintext2Style, { marginTop: 3 }]}>
              {this.state.text2}
            </Text>
          </View>
          <TextInputs text1={this.state.text1} text2={this.state.text2} />
          <View style={styles.forgotPasswordViewStyle}>
            <TouchableOpacity onPress={() => this._forgot()}>
              <Text style={styles.forgotPasswordTextStyle}>
                {this.state.textUnderInput}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonViewStyle}>
            <TouchableOpacity style={styles.buttonTouchableStyle}>
              <Text style={styles.buttonTextStyle}>
                {this.state.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textUnderButtonViewStyle}>
            <View></View>
            <Text style={styles.textUnderButtonTextStyle}>
              {this.state.textUnderButton}
            </Text>
            <TouchableOpacity onPress={() => this._create(this.state.textUnderButtonUnderline)} style={styles.textUnderlineTouchableOpacityStyle}>
              <Text style={styles.textUnderButtonUnderlineTextStyle}>
                {this.state.textUnderButtonUnderline}
              </Text >
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create(
  {
    scrollViewStyle:
    {
      backgroundColor: 'black',
    },
    imageBackgroundStyle:
    {
      flex: 1,
      resizeMode: 'stretch'
    },
    logoStyleView:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -(Math.round(Dimensions.get('window').height) / 18.285 * 2.811),
      marginBottom: -(Math.round(Dimensions.get('window').height) / 23.695 * 2.811),
    },
    logoStyleImage:
    {
      resizeMode: 'contain',
      height: Math.round(Dimensions.get('window').height) * 0.104 * 4.67,
      width: Math.round(Dimensions.get('window').width) * 0.185 * 2.63,

    },
    mainTextStyle:
    {
      marginLeft: 16,
    },
    maintext1Style:
    {
      color: 'white',
      fontSize: 24,
      lineHeight: 29,
      display: 'flex',
    },
    forgotPasswordViewStyle:
    {
      marginRight: 16,
      flex: 1,
      marginTop: -(Math.round(Dimensions.get('window').height) / 18.285 * 0.511),
      alignItems:"flex-end"
    },
    forgotPasswordTextStyle:
    {
      display: 'flex',
      justifyContent: 'center',
      color: '#9C9B9B',
      fontSize: 14,
      lineHeight: 80,
      textDecorationLine: 'underline'
    },
    buttonViewStyle:
    {
      marginRight: 16,
      marginLeft: 16,
      marginTop: 57,
    },
    buttonTouchableStyle:
    {
      backgroundColor: '#F5044C',
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonTextStyle:
    {
      fontSize: 18,
      lineHeight: 21,
      display: 'flex',
      textAlign: 'center',
      color: 'white'
    },
    textUnderButtonViewStyle:
    {
      flex: 1,
      flexDirection: 'row',
      marginRight: 16,
      marginLeft: 16,
      height: 104,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textUnderButtonTextStyle:
    {
      fontSize: 14,
      lineHeight: 80,
      color: '#9C9B9B'
    },
    textUnderButtonUnderlineTextStyle:
    {
      fontSize: 14,
      lineHeight: 80,
      color: '#9C9B9B',
      textDecorationLine: 'underline'
    },
  }
)