import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics, Fonts, Images } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SponsorStyle'

// I18n
import I18n from 'react-native-i18n'

class Sponsor extends React.Component {

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.mainContainer}>
            <View style={{alignItems: 'center'}}>
              <Text style={Fonts.style.h3}>
                Benefits for MARTARewards members
              </Text>
              <View style={styles.section}>
                <Text>Free MARTA rides to and from Atlanta Falcons games. Sponsored by the Atlanta Falcons and Miller Lite</Text>
                <Image source={Images.falcons} style={styles.sponsorImage}/>
                <Image source={Images.miller} style={styles.sponsorImage}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)
