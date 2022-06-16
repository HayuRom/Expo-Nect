import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen.ls";
import FavoriteScreen from "./FavoriteScreen";
import ProfileScreen from "./ProfileScreen";
import MenuScreen from "./MenuScreen";
import DetailsScreen from "../DetailsScreen";
import ExporterProfile from "../ExporterProfile";
import { Ionicons } from '@expo/vector-icons';
import { Text, View,Button,StyleSheet,Image, TouchableOpacity} from 'react-native';

import ChatList from "../ChatList";

import Chatbox from "../Chatbox";


const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const NotificationStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const myOptionslist ={
  title:"chatlist",
  headerTintColor:"white",
  headerStyle:
  {
    backgroundColor:"#00997a",

  },
  headerRight: () =>(
   
    <View>
      <TouchableOpacity>
      <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>

    
    </View>
    

  ),

}
const Stacknot = () => {
  return(
    <NotificationStack.Navigator screenOptions={{headerShown:false}}>
      <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen}/>
      <NotificationStack.Screen name="DetailsScreen" component={DetailsScreen}/>
</NotificationStack.Navigator>
  );
  
}
const Stackhome = () => {
  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="NotificationScreen" component={HomeScreen}/>
      <HomeStack.Screen name="DetailsScreen" component={DetailsScreen}/>
      <HomeStack.Screen name="ChatList" component={ChatList} options={myOptionslist}/>
      <HomeStack.Screen name="Chatbox" component={Chatbox}/>
      <HomeStack.Screen name="ExporterProfile" component={ExporterProfile}/>
</HomeStack.Navigator>
  );
}

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home1"
    activeColor="#fff"
    barStyle={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={Stackhome}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{
        tabBarLabel: "Favourite",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Stacknot}
      options={{
        tabBarLabel: "Notification",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Menu"
      component={MenuScreen}
      options={{
        tabBarLabel: "Menu",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-menu" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        fontWeight: "bold",
      },
      // headerShown: false
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
     
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        fontWeight: "bold",
      },
      // headerShown: false
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{}}
    />
  </DetailsStack.Navigator>
);

export default MainTabScreen;
