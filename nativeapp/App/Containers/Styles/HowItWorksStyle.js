import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  badge: {
    fontSize: 24
  },
  badgeImage: {
    height: 25,
    width: 25
  },
})
