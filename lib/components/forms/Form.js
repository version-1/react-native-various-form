import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import ValidatorCollector from '../../validators/ValidatorCollector'
import Validator from './Validator'

export default class extends Component {
  constructor(props) {
    super(props)
    // chech validator type by initialize Validator
    this.validator
    this.validationResult = {}
  }

  validate(targets) {
    this.validationResult = this.validator.validate()
  }

  get collectValidators() {
    const { children, keyIndex, valueIndex } = this.props
    const collector = new ValidatorCollector(children, keyIndex, valueIndex)
    return collector.collect()
  }

  get validator() {
    return new Validator({
      ...this.collectValidators,
      ...this.props.validators
    })
  }

  onSubmit() {
    this.validate({ ...this.collectValidators, ...this.validators })
    this.props.onSubmit(this.validationResult)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trigger) {
      this.onSubmit()
    }
  }

  render() {
    const { children, style } = this.props
    return <ScrollView style={{ ...style }}>{this.props.children}</ScrollView>
  }
}
