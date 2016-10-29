import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import * as Animatable from 'react-native-animatable'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Animatable.Image animation='pulse' iterationCount='infinite' source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Ride MARTA, earn rewards, stay happy!
            </Text>
          </View>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ at #MARTAHack</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
