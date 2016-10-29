import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images, Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import API from '../Services/ProfileApi'

// Styles
import styles from './Styles/ProfileStyle'

// I18n
import I18n from 'react-native-i18n'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let api = API.create();
    api.getProfile().then((response) => {
      this.setState({ profile: response.data.results[0] });
    });
  }

  renderProfile() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={{ uri: this.state.profile.picture.large}} style={{width: 150, height: 150, borderRadius: 75}} />
        <View style={styles.section}>
          <Text style={{paddingBottom: 10}}>{this.state.profile.name.first.toUpperCase()} {this.state.profile.name.last.toUpperCase()}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 36}}>{Math.floor(Math.random() * (100 - 1)) + 1}</Text>
          <Image source={Images.trainWheel} style={{width: 50, height: 50}} />
        </View>
        <View style={styles.section}>
          <Image source={Images.beerBottles} style={{width: 75, height: 75}} />
          <Image source={Images.world} style={{width: 75, height: 75}} />
          <Image source={Images.football} style={{width: 75, height: 75}} />
        </View>
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.mainContainer}>
            { this.state.profile ? this.renderProfile() : null}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
