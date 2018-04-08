import ValidatorCollector from '../../lib/validators/ValidatorCollector'
import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

describe('ValidatorCollector', () => {
  describe('normal case', () => {
    describe('single validator', () => {
      const ele = (
        <View>
          <TextInput key="input-1" name="name" value="hoge" required />
        </View>
      )
      const collector = new ValidatorCollector(ele.props.children)
      it('returns validate target', () => {
        expect(collector.collect()).toEqual({
          name: {
            key: 'name',
            message: 'name is invalid',
            validators: { required: true },
            value: 'hoge'
          }
        })
      })
    })

    describe('nested validator', () => {
      const ele = React.createElement(
        View,
        [],
        [
          <View key="view-1">
            <TextInput key="input-1" name="name" value="hoge" required />
            <View key="view-2">
              <TextInput
                key="input-2"
                name="email"
                value="hoge@example.com"
                required
                email
              />
            </View>
            <View key="view-3">
              <TextInput key="input-3" name="hoge" value="hoge" />
              <TextInput key="input-4" name="fuga" value="fuga" />
              <TextInput key="input-5" name="bar" value="bar" />
            </View>
          </View>
        ]
      )
      const collector = new ValidatorCollector(ele.props.children)
      it('returns validate target', () => {
        expect(collector.collect()).toEqual({
          name: {
            key: 'name',
            message: 'name is invalid',
            validators: { required: true },
            value: 'hoge'
          },
          email: {
            key: 'email',
            message: 'email is invalid',
            validators: {
              email: true,
              required: true
            },
            value: 'hoge@example.com'
          },
          fuga: {
            key: 'fuga',
            message: 'fuga is invalid',
            validators: {},
            value: 'fuga'
          },
          hoge: {
            key: 'hoge',
            message: 'hoge is invalid',
            validators: {},
            value: 'hoge'
          },
          bar: {
            key: 'bar',
            message: 'bar is invalid',
            validators: {},
            value: 'bar'
          }
        })
      })
    })
  })
})
