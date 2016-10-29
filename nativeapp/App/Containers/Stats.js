import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/StatsStyle'

// I18n
import I18n from 'react-native-i18n'

class Stats extends React.Component {

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <View style={styles.mainContainer}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.section}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 36}}>{Math.floor(Math.random() * (100 - 1)) + 1}</Text>
                <Image source={Images.trainWheel} style={{width: 50, height: 50}} />
              </View>
            </View>
            <View style={styles.section}>
              <Text>Season</Text>
              <Text>34 miles ridden</Text>
              <Text>1,253 of 57,642</Text>
            </View>
            <View style={styles.section}>
              <Text>Lifetime</Text>
              <Text>476 miles ridden</Text>
              <Text>11,242 of 103,642 users over lifetime</Text>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
