import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class buttons0_4 extends Component {
    constructor() {
        super();
        this.state = {
            button1Style:
            {
                alignItems: 'center',
                backgroundColor: '#F5044C',
                padding: 10,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button2Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button3Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                borderRadius: 30.8965,
                marginRight: 5
            },
            button4Style:
            {
                alignItems: 'center',
                borderWidth: 0.636364,
                borderColor: '#F5044C',
                padding: 10,
                borderRadius: 30.8965,
                marginRight: 5
            },
        }
    }
    _button1_pressed() {
        this.setState(
            {
                button1Style:
                {
                    alignItems: 'center',
                    backgroundColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button2Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button3Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button4Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
            }
        )
    }
    _button2_pressed() {
        this.setState(
            {
                button1Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button2Style:
                {
                    alignItems: 'center',
                    backgroundColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button3Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button4Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
            }
        )
    }
    _button3_pressed() {
        this.setState(
            {
                button1Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button2Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button3Style:
                {
                    alignItems: 'center',
                    backgroundColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button4Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
            }
        )
    }
    _button4_pressed() {
        this.setState(
            {
                button1Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button2Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button3Style:
                {
                    alignItems: 'center',
                    borderWidth: 0.636364,
                    borderColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
                button4Style:
                {
                    alignItems: 'center',
                    backgroundColor: '#F5044C',
                    padding: 10,
                    borderRadius: 30.8965,
                    marginRight: 5
                },
            }
        )
    }
    render() {
        let buttons1_5 = [];
        buttons1_5.push(<View key={1} style={{ flex: 1 }}>
            <TouchableOpacity key={1} onPress={() => this._button1_pressed()} style={this.state.button1Style}>
                <Text style={styles.buttonTextStyle}>Adventure</Text>
            </TouchableOpacity>
        </View>);
        buttons1_5.push(<View key={2} style={{ flex: 1 }}>
            <TouchableOpacity key={2} onPress={() => this._button2_pressed()} style={this.state.button2Style}>
                <Text style={styles.buttonTextStyle}>Comedy</Text>
            </TouchableOpacity>
        </View>);
        buttons1_5.push(<View key={3} style={{ flex: 1 }}>
            <TouchableOpacity key={3} onPress={() => this._button3_pressed()} style={this.state.button3Style}>
                <Text style={styles.buttonTextStyle}>Drama</Text>
            </TouchableOpacity>
        </View>);
        buttons1_5.push(<View key={4} style={{ flex: 1 }}>
            <TouchableOpacity key={4} onPress={() => this._button4_pressed()} style={this.state.button4Style}>
                <Text style={styles.buttonTextStyle}>Thriller</Text>
            </TouchableOpacity>
        </View>);
        return (
            <View style={styles.comingNextButtonsView}>
                {buttons1_5}
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        buttonTextStyle:
        {
            fontSize: 11.4545,
            lineHeight: 14,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white'
        },
        comingNextButtonsView:
        {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginLeft: 16
        },
    }
)