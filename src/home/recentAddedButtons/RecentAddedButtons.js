import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native'
import Movies from '../moviesList/MoviesRecentAdded';
export default class RecentAdded extends Component {
  constructor() {
    super();
    this.state = {
      button5Style:
      {
        backgroundColor: '#F5044C',
      },
      button6Style:
      {
        borderColor: '#F5044C',
      },
      button7tyle:
      {
        borderColor: '#F5044C',
      },
      button8Style:
      {
        borderColor: '#F5044C',
      },
      category: 'Adventure',
    }
  }
  _button5_pressed() {
    this.setState(
      {
        button5Style:
        {
          backgroundColor: '#F5044C',
        },
        button6Style:
        {
          borderColor: '#F5044C',
        },
        button7Style:
        {
          borderColor: '#F5044C',
        },
        button8Style:
        {
          borderColor: '#F5044C',
        },
        category: 'Adventure'
      }
    )
  }
  _button6_pressed() {
    this.setState(
      {
        button5Style:
        {
          borderColor: '#F5044C',
        },
        button6Style:
        {
          backgroundColor: '#F5044C',
        },
        button7Style:
        {
          borderColor: '#F5044C',
        },
        button8Style:
        {
          borderColor: '#F5044C',
        },
        category: 'Comedy'
      }
    )
  }
  _button7_pressed() {
    this.setState(
      {
        button5Style:
        {
          borderColor: '#F5044C',
        },
        button6Style:
        {
          borderColor: '#F5044C',
        },
        button7Style:
        {
          backgroundColor: '#F5044C',
        },
        button8Style:
        {
          borderColor: '#F5044C',
        },
        category: 'Drama'
      }
    )
  }
  _button8_pressed() {
    this.setState(
      {
        button5Style:
        {
          borderColor: '#F5044C',
        },
        button6Style:
        {
          borderColor: '#F5044C',
        },
        button7Style:
        {
          borderColor: '#F5044C',
        },
        button8Style:
        {
          backgroundColor: '#F5044C',
        },
        category: 'Thriller'
      }
    )
  }
  render() {

    let buttons5_9 = [];
    buttons5_9.push(<View key={5} >
      <TouchableOpacity key={5} onPress={() => this._button5_pressed()} style={[this.state.button5Style, styles.buttonsTouchableStyle]}>
        <Text style={styles.buttonTextStyle} >Adventure</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={6} >
      <TouchableOpacity key={6} onPress={() => this._button6_pressed()} style={[this.state.button6Style, styles.buttonsTouchableStyle]}>
        <Text style={styles.buttonTextStyle}>Comedy</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={7} >
      <TouchableOpacity key={7} onPress={() => this._button7_pressed()} style={[this.state.button7tyle , styles.buttonsTouchableStyle]}>
        <Text style={styles.buttonTextStyle}>Drama</Text>
      </TouchableOpacity>
    </View>)
    buttons5_9.push(<View key={8} >
      <TouchableOpacity key={8} onPress={() => this._button8_pressed()} style={[this.state.button8Style, styles.buttonsTouchableStyle]}>
        <Text style={styles.buttonTextStyle}>Thriller</Text>
      </TouchableOpacity>
    </View>)
    return (
      <View>
        <View style={styles.recentAddedButtonsView}>
          <ScrollView horizontal='true'>
            {buttons5_9}
          </ScrollView>
        </View>
        <Movies navigation={this.props.navigation} category={this.state.category} />
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
    buttonsTouchableStyle:
    {
      alignItems: 'center',
      alignItems: 'center',
      padding: 10,
      width: Math.round(Dimensions.get('window').width) / 4,
      borderRadius: 30.8965,
      marginRight: 5,
      borderWidth: 0.636364,
    }
  }
)