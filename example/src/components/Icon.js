import React, { Component } from 'react'
import { Image } from 'react-native'

const checkIcon = require('../assets/icons/check.png')
const arrowIcon = require('../assets/icons/arrow.png')

export const Icon = ({ source, style }) => (
  <Image source={source} style={style} />
)

export const CheckIcon = ({ style }) => (
  <Icon
    source={checkIcon}
    style={{
      ...{
        margin: 10,
        marginRight: 30,
        height: 20,
        width: 20,
        tintColor: '#28B759'
      },
      ...style
    }}
  />
)

export const ArrowIcon = ({ style }) => (
  <Icon
    source={arrowIcon}
    style={{
      margin: 20,
      marginRight: 20,
      height: 20,
      width: 20,
      ...style
    }}
  />
)
