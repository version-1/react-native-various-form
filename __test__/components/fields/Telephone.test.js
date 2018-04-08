import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import { Telephone } from 'react-native-various-form'

describe('Telephone', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Telephone value="000-0000-0000" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('placeholder is changed as passed', () => {
    const tree = renderer
      .create(<Telephone value="000-0000-0000" placeholder="000-0000-0000" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('delimiter is changed as passed', () => {
    const tree = renderer
      .create(<Telephone value="000 0000 0000" delimiter=" " />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
