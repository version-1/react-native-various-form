import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import LongYearMonth from './yearMonth/LongYearMonth'
import ShortYearMonth from './yearMonth/ShortYearMonth'
import LongMonthYear from './yearMonth/LongMonthYear'
import ShortMonthYear from './yearMonth/ShortMonthYear'

export default class YearMonth extends Component {
  constructor(props) {
    super(props)
  }

  get types() {
    return {
      longYearMonth: <LongYearMonth {...this.props} />,
      shortYearMonth: <ShortYearMonth {...this.props} />,
      longMonthYear: <LongMonthYear {...this.props} />,
      shortMonthYear: <ShortMonthYear {...this.props} />
    }
  }

  createRenderer(type) {
    return this.types[type] ? (
      this.types[type]
    ) : (
      <LongMonthYear {...this.props} />
    )
  }

  render() {
    return this.createRenderer(this.props.formatType)
  }
}
