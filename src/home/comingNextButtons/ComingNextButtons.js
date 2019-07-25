import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Dimensions } from "react-native";
import Movies from '../moviesList/MoviesComingNext';
import getDataFromAPI, { ExploreScreenAPI } from '../../home/networkingHome/NetworkHome';


export default class Coming extends Component {

    constructor() {
        super();
        this.state = {
            buttonOnStyle:
            {
                backgroundColor: '#F5044C',
            },
            buttonOffStyle:
            {
                borderColor: '#F5044C',
            },
            category: 'Action',
            dataSource: null,
            isLoading: true,
        }
    }

    
    buttons1_5 = [];

    async componentDidMount() {
        let objectApi = await getDataFromAPI(ExploreScreenAPI);
        this.setState({
            isLoading: false,
            dataSource: objectApi,
        })        
    }
    
    _buttonpressed(i) {
        this.buttons1_5 = [];
        this.setState({
            category:this.state.dataSource[i].name,
        })
        for (let j = 0; j < this.buttons1_5.length; j++) {
            this.buttons1_5.push(<View key={j} >
                <TouchableOpacity key={j} onPress={() => this._buttonpressed(j)} style={[this.state.buttonOffStyle, styles.buttonsTouchableStyle]}>
                    <Text style={styles.buttonTextStyle}>{this.state.dataSource[j].name}</Text>
                </TouchableOpacity>
            </View >);
        }
        this.buttons1_5[i] = <View key={i} >
            <TouchableOpacity key={i} onPress={() => this._buttonpressed(i)} style={[this.state.buttonOnStyle, styles.buttonsTouchableStyle]}>
                <Text style={styles.buttonTextStyle}>{this.state.dataSource[i].name}</Text>
            </TouchableOpacity>
        </View >;
        

    }
    render() {

        if (this.state.isLoading) {
            
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            for (let i = 0; i < this.state.dataSource.length; i++) {
                if (i == 0) this.buttons1_5.push(<View key={i} >
                    <TouchableOpacity key={i} onPress={() => this._buttonpressed(i)} style={[this.state.buttonOnStyle, styles.buttonsTouchableStyle]}>
                        <Text style={styles.buttonTextStyle}>{this.state.dataSource[i].name}</Text>
                    </TouchableOpacity>
                </View >);
                else this.buttons1_5.push(<View key={i} >
                    <TouchableOpacity key={i} onPress={() => this._buttonpressed(i)} style={[this.state.buttonOffStyle, styles.buttonsTouchableStyle]}>
                        <Text style={styles.buttonTextStyle}>{this.state.dataSource[i].name}</Text>
                    </TouchableOpacity>
                </View >);
            }
            return (
                <View>
                    <View style={styles.comingNextButtonsView}>
                        <ScrollView horizontal='true'>
                            {this.buttons1_5}
                        </ScrollView>
                    </View>
                    <Movies navigation={this.props.navigation} category={this.state.category} />
                </View>
            );
        }
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
        comingNextButtonsView:
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
