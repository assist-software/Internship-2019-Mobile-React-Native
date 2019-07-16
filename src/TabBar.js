import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './home/HomeScreen';
import WatchlistScreen from './watchlist/WatchlistScreen';
import ExploreScreen from './explore/ExploreScreen';
import React from 'react';
import DetailsScreen from "./details/DetailsScreen";
import FullImageScreen from "./details/FullImageScreen";
import VideosScreen from "./details/VideosScreen";
import LoginScreen from "./Login/LoginScreen";

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Watchlist: WatchlistScreen,
    Explore: ExploreScreen
});

const homeStackNavigator = createStackNavigator({
    HomePage: TabNavigator,
    Details: DetailsScreen,
    FullImage: FullImageScreen,
    Trailers: VideosScreen,
    Login: LoginScreen

}, {
        initialRouteName: 'HomePage',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    })

export default homeStackNavigator;