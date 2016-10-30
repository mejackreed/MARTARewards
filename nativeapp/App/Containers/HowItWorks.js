import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, Images, Fonts } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/HowItWorksStyle'

// I18n
import I18n from 'react-native-i18n'

class HowItWorks extends React.Component {

  renderRow(data) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{'\u2022'}</Text>
        <Text style={{flex: 1, paddingLeft: 5}}>{data}</Text>
      </View>
    );
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={{padding: 20}}>
            <View style={styles.mainContainer}>
              <View>
                <Text style={Fonts.style.h3}>
                  Earn Titles and Badges
                </Text>
                <Text style={Fonts.style.h6}>
                  Earn one wheel for every trip and unlock titles and badges!
                </Text>
              </View>
              <View style={styles.section}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.badge}>1</Text>
                  <Image source={Images.trainWheel} style={styles.badgeImage} />
                  <Text style={styles.badge}>Excited Rider</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.badge}>10</Text>
                  <Image source={Images.trainWheel} style={styles.badgeImage} />
                  <Text style={styles.badge}>Happy Commuter</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.badge}>30</Text>
                  <Image source={Images.trainWheel} style={styles.badgeImage} />
                  <Text style={styles.badge}>Safety Officer</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.badge}>60</Text>
                  <Image source={Images.trainWheel} style={styles.badgeImage} />
                  <Text style={styles.badge}>Railroad Engineer</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.badge}>90</Text>
                  <Image source={Images.trainWheel} style={styles.badgeImage} />
                  <Text style={styles.badge}>Master Conductor</Text>
                </View>
              </View>
              <Text style={Fonts.style.h5}>
                Sleek Functionality
              </Text>
              <View style={styles.section}>
                {this.renderRow('Real time reporting and notification of what you see.')}
                {this.renderRow('Reload your existing breeze card and track your history and stats.')}
                {this.renderRow('Check train or bus arrival times and length of time to a certain rail station or bus stop.')}
              </View>
              <Text style={Fonts.style.h5}>
                Community Rewards
              </Text>
              <View style={styles.section}>
                {this.renderRow('Take custom tailored surveys unique to your MARTA experience and earn bonuses from participating sponsors.')}
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

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
