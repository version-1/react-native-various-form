import React, { Component } from 'react'
import { Platform, Text, View, FlatList } from 'react-native'
import { YearMonth } from 'react-native-various-form'
import { common, fields } from '../../styles/base.js'
type Props = {}

export default class extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'YearMonth'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      formatType: 'longYearMonth',
      value: ''
    }
  }

  get itemList() {
    return [
      { label: 'LongYearMonth', value: 'longYearMonth' },
      { label: 'ShortYearMonth', value: 'shortYearMonth' },
      { label: 'LongMonthYear', value: 'longMonthYear' },
      { label: 'ShortMonthYear', value: 'shortMonthYear' }
    ]
  }

  render() {
    return (
      <View style={fields.container}>
        <View>
          <Text style={fields.label}>{"Let's Try"}</Text>
          <YearMonth
            fontSize={20}
            containerStyle={fields.component}
            formatType={this.state.formatType}
            value={this.state.value}
            onChangeText={text => this.setState({ value: text })}
          />
          <Text style={fields.description}>{this.state.value}</Text>
        </View>
        <FlatList
          style={common.flatList.container}
          keyExtractor={(item, index) => `${item}-${index}`}
          data={this.itemList}
          renderItem={({ item }) => (
            <Text
              key={item.label}
              onPress={() =>
                this.setState({ formatType: item.value, value: '' })
              }
              style={common.flatList.label}
            >
              {item.label}
            </Text>
          )}
        />
      </View>
    )
  }
}
