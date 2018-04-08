import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

export const ButtonSuccess = ({
  title,
  onPress,
  style = {},
  textStyle = {}
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#28B759',
      borderRadius: 10,
      padding: 15,
      margin: 30,
      ...style
    }}
    onPress={() => onPress()}
  >
    <Text
      style={{
        flex: 1,
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 0.6,
        color: 'white',
        textAlign: 'center',
        ...textStyle
      }}
    >
      {title || 'submit'}
    </Text>
  </TouchableOpacity>
)
