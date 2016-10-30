import React, { Component, PropTypes } from 'react'
import { ScrollView, Image, BackAndroid, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import LoginActions, { isLoggedIn } from '../Redux/LoginRedux'

class DrawerContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const { loggedIn } = nextProps
    // BackAndroid.addEventListener('hardwareBackPress', () => {
    //   if (this.context.drawer.props.open) {
    //     this.toggleDrawer()
    //     return true
    //   }
    //   return false
    // })
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

  handlePressHow = () => {
    this.toggleDrawer();
    NavigationActions.how();
  };

  renderLoggedInContent () {
    return (
      <View>
        <DrawerButton text='Profile' onPress={this.handlePressProfile} />
        <DrawerButton text='Stats' onPress={this.handlePressStats} />
        <DrawerButton text='Survey' onPress={this.handlePressSurvey} />
        <DrawerButton text='Featured Benefits' onPress={this.handlePressSponsor} />
      </View>
    )
  }

  renderBothContent () {
    return (
      <DrawerButton text='How It Works' onPress={this.handlePressHow} />
    )
  }

  renderLoggedOutContent () {
    return (
      <DrawerButton text='Login' onPress={this.handlePressLogin} />
    )
  }

  render () {
    const { loggedIn, temperature, city } = this.props
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        {loggedIn ? this.renderLoggedInContent() : this.renderLoggedOutContent()}
        {this.renderBothContent()}
      </ScrollView>
    )
  }

}

DrawerContent.propTypes = {
  loggedIn: PropTypes.bool
}
const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.login)
  }
}


DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default connect(mapStateToProps)(DrawerContent)
