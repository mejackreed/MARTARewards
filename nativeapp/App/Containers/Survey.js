import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/SurveyStyle'

// I18n
import I18n from 'react-native-i18n'

class Survey extends React.Component {
  respondToQuestion() {
    window.alert('Thank you for your response. You are on your way to earn more points!');
    NavigationActions.presentationScreen();
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.mainContainer}>
            <View style={styles.section}>
              <Text>What is your primary mode of transportation?</Text>
              <RoundedButton text='Car' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Bike' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='MARTA' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Walk' onPress={() => this.respondToQuestion()} />
            </View>
            <View style={styles.section}>
              <Text>How often do you use MARTA?</Text>
              <RoundedButton text='Daily' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Weekly' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Monthly' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Never' onPress={() => this.respondToQuestion()} />
            </View>
            <View style={styles.section}>
              <Text>Where are you headed on MARTA right now?</Text>
              <RoundedButton text='Home' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Work' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Falcons' onPress={() => this.respondToQuestion()} />
              <RoundedButton text='Other' onPress={() => this.respondToQuestion()} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
