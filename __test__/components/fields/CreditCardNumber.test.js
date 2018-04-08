import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import { CreditCardNumber } from 'react-native-various-form'

describe('CreditCardNumber', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CreditCardNumber />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('placeholder is changed as passed', () => {
    const tree = renderer
      .create(
        <CreditCardNumber
          value="0000-0000-0000-0000"
          placeholder="0000-0000-0000-0000"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('delimiter is changed as passed', () => {
    const tree = renderer
      .create(<CreditCardNumber value="0000 0000 0000 0000" delimiter=" " />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
