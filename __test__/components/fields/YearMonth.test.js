import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import { YearMonth } from 'react-native-various-form'

describe('YearMonth', () => {
  it('default', () => {
    const tree = renderer.create(<YearMonth value="2018/10" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('LongYearMonth', () => {
    const tree = renderer
      .create(<YearMonth formatType="longYearMonth" value="2018/10" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ShortYearMonth', () => {
    const tree = renderer
      .create(<YearMonth formatType="shortYearMonth" value="2018/10" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('LongMonthYear', () => {
    const tree = renderer
      .create(<YearMonth formatType="longMonthYear" value="2018/10" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ShortMonthYear', () => {
    const tree = renderer
      .create(<YearMonth formatType="shortMonthYear" value="2018/10" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
