import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import { common } from '../../styles/base.js'

export default class extends Component {
  renderInput(props) {
    if (this.props.renderInput) return this.props.renderInput(props)
    return (
      <TextInput
        {...props}
        value={props.value}
        style={[
          common.textField.content,
          props.disabled && common.textField.disabled
        ]}
        editable={!props.disabled}
        placeholder={props.placeholder}
        autoCapitalize={'none'}
      />
    )
  }
  render() {
    const { label, disabled } = this.props
    return (
      <View
        style={[
          common.textField.container,
          this.props.style,
          disabled && common.textField.disabled
        ]}
      >
        <Text
          style={[
            common.textField.label,
            disabled && common.textField.disabled
          ]}
        >
          {label}:
        </Text>
        {this.renderInput(this.props)}
      </View>
    )
  }
}
