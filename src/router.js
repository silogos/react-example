import React, { Component } from "react"
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation"

import HomeScreen from "./screens/Home"
import LogInScreen from "./screens/LogIn"
import MemberAreaScreen from "./screens/MemberArea"
import VaccinesScreen from "./screens/Vaccines"
import VisaScreen from "./screens/Visa"
import EmergencyScreen from "./screens/Emergency"
import LoungeScreen from "./screens/Lounge"

const RootNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { header: null } },
    LogIn: { screen: LogInScreen, navigationOptions: { headerTitle: "Log In" } },
    MemberArea: { screen: MemberAreaScreen, navigationOptions: { headerTitle: "Member Area" } },
    Vaccines: { screen: VaccinesScreen, navigationOptions: { headerTitle: "Vaccines" } },
    Visa: { screen: VisaScreen, navigationOptions: { headerTitle: "Visa" } },
    Emergency: { screen: EmergencyScreen, navigationOptions: { headerTitle: "Emergency" } },
    Lounge: { screen: LoungeScreen, navigationOptions: { headerTitle: "Lounge" } },
  },
  {
    // headerMode: "none",
    initialRouteName: "Home"
  }
)

export default createAppContainer(RootNavigator)
