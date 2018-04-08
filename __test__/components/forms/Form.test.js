import Form from '../../../lib/components/forms/Form'
import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import renderer from 'react-test-renderer'

describe('Form', () => {
  describe('normal case', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Form>
            <View>
              <TextInput name="email" value="" emali required />
            </View>
            <View>
              <TextInput name="password" value="" />
            </View>
            <Button title="submit" onPress={() => {}} />
          </Form>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
