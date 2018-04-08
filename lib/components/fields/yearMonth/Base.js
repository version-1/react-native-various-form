import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { SLASH } from '../../../utils/Constants'
import { NotImplementedError } from '../../../utils/Errors'

export default class Base extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backSpace: false
    }
    this._textInputs = []
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.changeFocus()
    }
  }

  changeFocus() {
    if (this.state.backSpace) {
      this.focusBack()
    } else {
      this.focusNext()
    }
  }

  focusBack() {
    const index = this._textInputs.findIndex((input, index, arr) => {
      return input._lastNativeText === '' && index > 0
    })
    if (index > 0) this._textInputs[index - 1].focus()
  }

  focusNext() {
    const index = this._textInputs.findIndex((input, index, arr) => {
      return (
        (input._lastNativeText || '').length === input.props.maxLength &&
        index < arr.length - 1
      )
    })
    if (index >= 0) this._textInputs[index + 1].focus()
  }

  get year() {
    return (this.props.value || '').split(SLASH)[0] || ''
  }

  get month() {
    return (this.props.value || '').split(SLASH)[1] || ''
  }

  get slicedYear() {
    return (this.year || '').slice(-2)
  }

  get containerStyle() {
    return [styles.container, this.props.containerStyle]
  }

  get delimiterStyle() {
    return [styles.delimiterText, this.props.delimiterStyle]
  }

  get numericStyle() {
    return [styles.numeric, this.props.numericStyle]
  }

  get inputs() {
    throw new NotImplementedError('please implement inputProps')
  }

  render() {
    return (
      <View style={this.containerStyle}>
        <View>
          <TextInput
            {...this.props}
            {...this.inputs[0].attr}
            style={this.numericStyle}
            fontSize={this.props.fontSize}
            value={this.inputs[0].value}
            ref={component => (this._textInputs[0] = component)}
            onKeyPress={event => {
              const backSpace = event.nativeEvent.key === 'Backspace'
              this.setState({ backSpace })
            }}
            onChangeText={text => {
              const value = this.inputs[0].getValue(text)
              this.props.onChangeText(value)
            }}
          />
        </View>
        <View style={styles.delimiter}>
          <Text style={this.delimiterStyle} fontSize={this.props.fontSize}>
            {this.props.delimtier || SLASH}
          </Text>
        </View>
        <View>
          <TextInput
            {...this.props}
            {...this.inputs[1].attr}
            style={this.numericStyle}
            fontSize={this.props.fontSize}
            value={this.inputs[1].value}
            ref={component => (this._textInputs[1] = component)}
            onKeyPress={event => {
              const backSpace = event.nativeEvent.key === 'Backspace'
              this.setState({ backSpace })
            }}
            onChangeText={text => {
              const value = this.inputs[1].getValue(text)
              this.props.onChangeText(value)
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  delimiter: {
    paddingHorizontal: 10
  },
  delimiterText: {
    color: 'lightgray'
  },
  numeric: {}
})
