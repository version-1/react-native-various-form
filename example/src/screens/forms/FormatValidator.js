import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import {
  Form,
  Telephone,
  Zipcode,
  CustomValidator
} from 'react-native-various-form'
import TextField from '../../components/fields/TextField'
import { ButtonSuccess } from '../../components/Buttons'

import { common, fields, form } from '../../styles/base.js'
type Props = {}

export default class extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Format Validator'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={form.base.container}>
        <Form
          onSubmit={({ result, errors, messages }) => {
            if (result) {
              Alert.alert('Login Success!!')
            } else {
              Alert.alert(messages[0])
            }
            this.setState({ submit: false })
          }}
          trigger={this.state.submit}
        >
          <TextField
            label="Email"
            name="email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="input your email..."
            required
            email={{
              message: 'Please Write Your Custom Error Message for Email'
            }}
          />
          <TextField
            label="password"
            name="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
            placeholder="******"
            message="Password must be 6-8 characters in length "
            required
            format={{
              message: 'Please Write Your Custom Error Message for Format',
              regexp: '[A-Za-z0-9]{6,8}'
            }}
          />
          <ButtonSuccess
            title="Login"
            onPress={() => this.setState({ submit: true })}
          />
        </Form>
      </View>
    )
  }
}
