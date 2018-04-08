/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CreditCardNumberScreen from './src/screens/fields/CreditCardNumberScreen'
import ZipcodeScreen from './src/screens/fields/ZipcodeScreen'
import TelephoneScreen from './src/screens/fields/TelephoneScreen'
import YearMonthScreen from './src/screens/fields/YearMonthScreen'
import BaseInformation from './src/screens/forms/BaseInformation'
import FormatValidator from './src/screens/forms/FormatValidator'
import CustomValidator from './src/screens/forms/CustomValidator'
import Top from './src/screens/Top'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
])

type Props = {}

export default class App extends Component<Props> {
  render() {
    return <Routes />
  }
}

const Routes = StackNavigator(
  {
    Top: {
      screen: Top
    },
    CreditCardNumber: {
      screen: CreditCardNumberScreen
    },
    Telephone: {
      screen: TelephoneScreen
    },
    Zipcode: {
      screen: ZipcodeScreen
    },
    YearMonth: {
      screen: YearMonthScreen
    },
    BaseInformation: {
      screen: BaseInformation
    },
    FormatValidator: {
      screen: FormatValidator
    },
    CustomValidator: {
      screen: CustomValidator
    }
  },
  {
    initialRouteName: 'Top'
  }
)
