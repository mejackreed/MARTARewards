import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  };

  handlePressLogin = () => {
    this.toggleDrawer();
    NavigationActions.login();
  };

  handlePressProfile = () => {
    this.toggleDrawer();
    NavigationActions.profile();
  };

  handlePressStats = () => {
    this.toggleDrawer();
    NavigationActions.stats();
  };

  handlePressSurvey = () => {
    this.toggleDrawer();
    NavigationActions.survey();
  };

  handlePressSponsor = () => {
    this.toggleDrawer();
    NavigationActions.sponsor();
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Login' onPress={this.handlePressLogin} />
        <DrawerButton text='Profile' onPress={this.handlePressProfile} />
        <DrawerButton text='Stats' onPress={this.handlePressStats} />
        <DrawerButton text='Survey' onPress={this.handlePressSurvey} />
        <DrawerButton text='Sponsor' onPress={this.handlePressSponsor} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
