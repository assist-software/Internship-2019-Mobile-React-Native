import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {Dimensions} from 'react-native'
export default class buttons4_7 extends Component {
  constructor() {
    super();
    this.state = {
      button5Style:
      {
        alignItems: 'center',
        backgroundColor: '#F5044C',
        padding: 10,
        width: Math.round(Dimensions.get('window').width)/4,
        borderRadius: 30.8965,
        marginRight: 5
      },
      button6Style:
      {
        alignItems: 'center',
        borderWidth: 0.636364,
        borderColor: '#F5044C',
        padding: 10,
        width: Math.round(Dimensions.get('window').width)/4,
        borderRadius: 30.8965,
        marginRight: 5
      },
      button7Style:
      {
        alignItems: 'center',
        borderWidth: 0.636364,
        borderColor: '#F5044C',
        padding: 10,
        width: Math.round(Dimensions.get('window').width)/4,
        borderRadius: 30.8965,
        marginRight: 5
      },
      button8Style:
      {
        alignItems: 'center',
        borderWidth: 0.636364,
        borderColor: '#F5044C',
        padding: 10,
        width: Math.round(Dimensions.get('window').width)/4,
        borderRadius: 30.8965,
        marginRight: 5
      },

    };

  }
  _button5_pressed() {
    this.setState(
        {
            button5Style:
            {
                alignItems: 'center',
                backgroundColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button6Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button7Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button8Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
        }
    )
}
_button6_pressed() {
    this.setState(
        {
            button5Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button6Style:
            {
                alignItems: 'center',
                backgroundColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button7Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button8Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
        }
    )
}
_button7_pressed() {
    this.setState(
        {
            button5Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button6Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button7Style:
            {
                alignItems: 'center',
                backgroundColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button8Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
        }
    )
}
_button8_pressed() {
    this.setState(
        {
            button5Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button6Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button7Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button8Style:
            {
                alignItems: 'center',
                backgroundColor: '#F5044C',
                padding: 10,
                width: Math.round(Dimensions.get('window').width)/4,
                borderRadius: 30.8965,
                marginRight: 5
                
            },
        }
    )
}
  render() {

    let buttons5_9 = [];
    buttons5_9.push(<View key={5} >
      <TouchableOpacity key={5} onPress={() => this._button5_pressed()} style={this.state.button5Style}>
        <Text style={styles.buttonTextStyle} >Adventure</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={6} >
      <TouchableOpacity key={6} onPress={() => this._button6_pressed()} style={this.state.button6Style}>
        <Text style={styles.buttonTextStyle}>Comedy</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={7} >
      <TouchableOpacity key={7} onPress={() => this._button7_pressed()} style={this.state.button7Style}>
        <Text style={styles.buttonTextStyle}>Drama</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={8} >
      <TouchableOpacity key={8} onPress={() => this._button8_pressed()} style={this.state.button8Style}>
        <Text style={styles.buttonTextStyle}>Thriller</Text>
      </TouchableOpacity>
    </View>)
    return (
      <View style={styles.recentAddedButtonsView}>
        <ScrollView horizontal='true'>
          {buttons5_9}
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create(
  {
    buttonTextStyle:
    {
      fontSize: 10.5,
      lineHeight: 14,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    recentAddedButtonsView:
    {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginLeft: 16
    },
  }
)