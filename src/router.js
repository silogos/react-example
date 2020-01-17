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
    Home: { screen: HomeScreen },
    LogIn: { screen: LogInScreen },
    MemberArea: { screen: MemberAreaScreen },
    Vaccines: { screen: VaccinesScreen },
    Visa: { screen: VisaScreen },
    Emergency: { screen: EmergencyScreen },
    Lounge: { screen: LoungeScreen },
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
)

export default createAppContainer(RootNavigator)
