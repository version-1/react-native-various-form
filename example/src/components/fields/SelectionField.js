import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import { CheckIcon } from '../../components/Icon'
import { common } from '../../styles/base.js'

export default class extends Component {
  renderItem(item, index, icon) {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => this.props.onSelect(index)}
      >
        {this.renderItemBody(item, index, icon)}
      </TouchableOpacity>
    )
  }

  renderItemBody(item, index, icon) {
    if (this.props.renderItem) {
      return this.props.renderItem(item, index, icon)
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: 'lightgray'
        }}
      >
        <Text
          style={{
            flex: 1,
            padding: 10,
            paddingLeft: 30
          }}
        >
          {item.label}
        </Text>
        {item.id === this.props.value && icon}
      </View>
    )
  }

  get icon() {
    if (this.props.icon) return this.props.icon
    return <CheckIcon />
  }

  render() {
    return (
      <FlatList
        value={this.props.value}
        style={{
          borderTopWidth: 0.3,
          borderColor: 'lightgray',
          backgroundColor: 'white',
          marginTop: 0
        }}
        data={this.props.data}
        renderItem={({ item, index }) => {
          return this.renderItem(item, index, this.icon, this.props.onSelect)
        }}
      />
    )
  }
}
