import { StyleSheet } from 'react-native'

export const Shadow = (elevation) => ({
  elevation,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0.5 * elevation },
  shadowOpacity: 0.3,
  shadowRadius: 0.8 * elevation
})

export const Styles = StyleSheet.create({
  // image
  imageCover: {
    flex: 1, 
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  imageContain: {
    flex: 1, 
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  imageStretch: {
    flex: 1, 
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  imageCenter: {
    flex: 1, 
    width: null,
    height: null,
    resizeMode: 'center'
  },
  imageRepeat: {
    flex: 1, 
    width: null,
    height: null,
    resizeMode: 'repeat'
  },
  
  // fonts
  fontBody1: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#000"
  },
  fontBody2: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000"
  },
  fontSubHeading: {
    fontWeight: "500",
    fontSize: 14,
    color: "#000",
  },
  fontCaption: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#000",
  },
  fontTitle1: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  fontTitle2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  fontTitle3: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  fontDisplay1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  fontDisplay2: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
  },
})