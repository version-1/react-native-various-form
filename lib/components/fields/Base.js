import React, { Component } from 'react'
import { TextInput, Button, StyleSheet } from 'react-native'
import { insertDelimiter } from '../../utils/Text'
import { NotImplementedError } from '../../utils/Errors'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  prevent = false
  get preventChar() {
    return ['Backspace']
  }

  delimiter() {
    throw new NotImplementedError('please implement delimiter')
  }

  getDelimiter() {
    const delimiter = this.delimiter()
    if (delimiter.length !== 1) {
      throw new TypeError('delimiter must be 1 charcter')
    }
    return delimiter
  }

  intervals() {
    throw new NotImplementedError('please implement intervals')
  }

  maxLength() {
    throw new NotImplementedError('please implement maxLength')
  }

  placeholder() {
    throw new NotImplementedError('please implement placeholder')
  }

  keyboardType() {
    throw new NotImplementedError('please implement keyboardType')
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={this.props.style}
        keyboardType={this.keyboardType()}
        onKeyPress={event => {
          const char = event.nativeEvent.key
          this.prevent = this.preventChar.indexOf(char) > 0
        }}
        placeholder={this.placeholder()}
        maxLength={this.maxLength()}
        value={this.props.value}
        onChangeText={text => {
          if (this.prevent) {
            this.prevent = false
            this.props.onChangeText(text)
          } else {
            this.props.onChangeText(
              insertDelimiter(text, this.intervals(), this.getDelimiter())
            )
          }
        }}
      />
    )
  }
}
