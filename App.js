import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import *as Font from "expo-font"
import {Rajdhani_600SemiBold} from '@expo-google-fonts/rajdhani';


export default class App extends Component {

  constructor(){
super()
this.state={
fontloaded: false ,

}
  }

  componentDidMount(){

    this.loadingfonts()
  }

async loadingfonts (){

await Font.loadAsync({Rajdhani_600SemiBold:Rajdhani_600SemiBold})
this.setState({fontloaded:true})

}

  render() {
    const{fontloaded} = this.state
    if (fontloaded){
      return <BottomTabNavigator/>
    }
    return null ;
  }
}

