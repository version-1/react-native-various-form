import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import { Zipcode } from 'react-native-various-form'
import { fields } from '../../styles/base.js'
type Props = {}

export default class extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Zipcode'
    }
  }
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  render() {
    return (
      <View style={fields.container}>
        <Text style={fields.label}>Let's Try</Text>
        <View style={fields.component}>
          <Zipcode
            style={fields.input}
            value={this.state.value}
            onChangeText={text => this.setState({ value: text })}
          />
        </View>
      </View>
    )
  }
}
