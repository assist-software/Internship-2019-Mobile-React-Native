import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './home/HomeScreen';
import WatchlistScreen from './watchlist/WatchlistScreen';
import ExploreScreen from './explore/ExploreScreen';
import React from 'react';
import DetailsScreen from "./details/DetailsScreen";

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Watchlist: WatchlistScreen,
    Explore: ExploreScreen,
});

const homeStackNavigator = createStackNavigator({
    HomePage: TabNavigator,
    Details: DetailsScreen

}, {initialRouteName: 'HomePage'})


export default homeStackNavigator;