import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native'
import { Form, Telephone, Zipcode } from 'react-native-various-form'

import TextField from '../../components/fields/TextField'
import SelectionField from '../../components/fields/SelectionField'
import { ButtonSuccess } from '../../components/Buttons'

import { common, fields, form } from '../../styles/base.js'
type Props = {}

export default class extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Base Information'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      age: '',
      gender: 1,
      address1: '',
      address2: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      submit: false
    }
  }

  get gender() {
    return [{ id: 1, label: 'male' }, { id: 2, label: 'female' }]
  }

  render() {
    return (
      <View>
        <Form
          onSubmit={({ result, errors, messages }) => {
            if (result) {
              Alert.alert('Submit Success!!')
            } else {
              Alert.alert(messages[0])
            }
            this.setState({ submit: false })
          }}
          trigger={this.state.submit}
        >
          <View style={{ marginTop: 30, backgroundColor: 'white' }}>
            <TextField
              label="Name"
              placeholder="tell us your name ..."
              value={this.state.name}
              name="name"
              onChangeText={name => this.setState({ name })}
              required
            />
            <TextField
              label="Email"
              placeholder="tell us your email ..."
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              name="email"
              required
              email
            />
            <TextField
              label="Phone"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              phoneNumber
              renderInput={props => (
                <Telephone {...props} style={{ flex: 3, padding: 10 }} />
              )}
            />
            <TextField
              label="Age"
              keyboardType="numeric"
              placeholder="tell us your age ..."
              value={this.state.age}
              name="age"
              onChangeText={age => this.setState({ age })}
              numeric
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                padding: 10,
                paddingLeft: 20,
                color: 'gray',
                fontSize: 11
              }}
            >
              Gender
            </Text>
            <SelectionField
              name="gender"
              value={this.state.gender}
              style={{
                borderTopWidth: 0.3,
                borderColor: 'lightgray',
                backgroundColor: 'white',
                marginTop: 0
              }}
              data={this.gender}
              onSelect={index =>
                this.setState({ gender: this.gender[index].id })
              }
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                padding: 10,
                color: 'gray',
                paddingLeft: 20,
                fontSize: 11
              }}
            >
              Address
            </Text>
            <View style={{ backgroundColor: 'white' }}>
              <TextField
                name="address1"
                label="Address1"
                placeholder="tell us your street ..."
                value={this.state.address1}
                onChangeText={address1 => this.setState({ address1 })}
                required
              />
              <TextField
                name="address2"
                label="Address2"
                placeholder="tell us your apartment, unit ..."
                value={this.state.address2}
                onChangeText={address2 => this.setState({ address2 })}
                required
              />
              <TextField
                name="zipcode"
                value={this.state.zipcode}
                label="Zipcode"
                onChangeText={zipcode => this.setState({ zipcode })}
                zipcode
                renderInput={props => (
                  <Zipcode {...props} style={{ flex: 3, padding: 10 }} />
                )}
              />
              <TextField
                name="city"
                label="City"
                placeholder="tell us your city ..."
                value={this.state.city}
                onChangeText={city => this.setState({ city })}
                required
              />
              <TextField
                name="state"
                label="State"
                placeholder="tell us your state ..."
                value={this.state.state}
                onChangeText={state => this.setState({ state })}
                required
              />
              <TextField
                name="country"
                label="Country"
                placeholder="tell us your country ..."
                value={this.state.country}
                onChangeText={country => this.setState({ country })}
                required
              />
            </View>
          </View>
          <ButtonSuccess onPress={() => this.setState({ submit: true })} />
        </Form>
      </View>
    )
  }
}
