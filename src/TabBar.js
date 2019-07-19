import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './home/HomeScreen';
import WatchlistScreen from './watchlist/WatchlistScreen';
import ExploreScreen from './explore/ExploreScreen';
import React from 'react';
import DetailsScreen from "./details/DetailsScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import FullImageScreen from "./details/FullImageScreen";
import VideosScreen from "./details/VideosScreen";
import GenreExploreList from "./GenreExplore/GenreExploreList";
import ProfileScreen from "./details/ProfileScreen";
import Video from "./home/trailerVideoYoutube/video"
import ListMovies from './listMovies/listMovies'
import Sidebar from '../src/home//drawerNavigator/sideBar'

const DrawerNavigatorHomeScreen = createDrawerNavigator(
    {
        HomeDrawer:
            { screen: HomeScreen },
        
    },
    {
        contentComponent: Sidebar,
    }
)
const TabNavigator = createBottomTabNavigator({
    Home:
    {
        screen: DrawerNavigatorHomeScreen,
        navigationOptions:
        {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={23} />
            )
        }
    },
    Watchlist:
    {
        screen: WatchlistScreen,
        navigationOptions:
        {
            tabBarLabel: 'Watchlist',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-star-outline" color={tintColor} size={23} />
            )
        }
    },
    Explore: {
        screen: ExploreScreen,
        navigationOptions:
        {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-search" color={tintColor} size={23} />
            )
        }
    }

},
    {
        tabBarOptions:
        {
            inactiveBackgroundColor: "#F5044C",
            activeBackgroundColor: "#F5044C",
            activeTintColor: 'white',
        },
    }
);

const homeStackNavigator = createStackNavigator({
    HomePage: TabNavigator,
    Details: DetailsScreen,
    FullImage: FullImageScreen,
    navGenreExploreList: GenreExploreList,
    MyProfile: ProfileScreen,
    Trailer_Details: {
        screen: VideosScreen
    },
    Trailer_Home: Video,
    ListMovies: ListMovies,


},
    {

        initialRouteName: 'HomePage',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })

export default homeStackNavigator;