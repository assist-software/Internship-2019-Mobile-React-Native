import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Dimensions } from "react-native";
import Movies from '../moviesList/MoviesComingNext';
import getDataFromAPI, { ExploreScreenAPI } from '../../home/networkingHome/NetworkHome';


export default class Coming extends Component {

    constructor() {
        super();
        this.state = {
            category: 'Action',
            dataSource: [],
            isLoading: true,
            activeButton: 0
        }
    }
    
    categoriesButtons = [];

    async componentDidMount() {
        let allCategories = await getDataFromAPI(ExploreScreenAPI);
        this.setState({
            isLoading: false,
            dataSource: allCategories,
        })        
    }
    
    _buttonpressed(i) {
        this.categoriesButtons = [];
        this.setState({
            category: this.state.dataSource[i].name,
            activeButton: i
        })
    }

    renderCategoriesButton() {
        
        for (let i = 0; i < this.state.dataSource.length; i++) {
          this.categoriesButtons.push(
            <View key={i} >
                <TouchableOpacity onPress={() => this._buttonpressed(i)} style={[ styles.buttonsTouchableStyle, 
                    i == this.state.activeButton ? styles.buttonOnStyle : styles.buttonOffStyle]}>
                    <Text style={styles.buttonTextStyle}>{this.state.dataSource[i].name}</Text>
                </TouchableOpacity>
            </View >);
        }
    }

    render() {

        if (this.state.isLoading) {    
            return (
                <View>
                    <ActivityIndicator />
                </View>)
        }
        else {
            this.renderCategoriesButton()
            return (
                <View>
                    <View style={styles.comingNextButtonsView}>
                        <ScrollView horizontal='true'>
                            {this.categoriesButtons}
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
        },
        buttonOnStyle:{
            backgroundColor: '#F5044C',
        },
        buttonOffStyle:{
            borderColor: '#F5044C',
        },
    }
)
