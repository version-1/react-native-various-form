import React, { Component } from 'react'
import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  Form,
  YearMonth,
  CreditCardNumber,
  ValidatorFactory
} from 'react-native-various-form'
import TextField from '../../components/fields/TextField'
import SelectionField from '../../components/fields/SelectionField'
import { CheckIcon } from '../../components/Icon'
import { ButtonSuccess } from '../../components/Buttons'

import { common, fields, form } from '../../styles/base.js'
type Props = {}

export default class extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Custom Validator'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      email: '',
      memberPlan: 1,
      cardNumber: '',
      expire: '',
      securityCode: ''
    }
  }

  get memberPlan() {
    return [
      { id: 1, label: 'Plan A', price: 0.0 },
      { id: 2, label: 'Plan B', price: 5.99 },
      { id: 3, label: 'Plan C', price: 9.99 }
    ]
  }

  validatePaymentInfoIfNeed(
    memberPlan,
    creditCardNumber,
    expire,
    securityCode
  ) {
    let validators = {}
    if ((this.memberPlan[memberPlan - 1] || {}).price) {
      validators = {
        creditCardNumber: ValidatorFactory.create('format', creditCardNumber, {
          regexp: /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/
        }),
        expire: ValidatorFactory.create('format', expire, {
          regexp: /[0-9]{2}\/[0-9]{2}/
        }),
        securityCode: ValidatorFactory.create('format', securityCode, {
          regexp: '^[0-9]{3}$'
        })
      }

      const results = Object.entries(validators).reduce((acc, item) => {
        if (!item[1].validate()) {
          return {
            ...acc,
            [item[0]]: item[1].message.replace(':key:', item[0])
          }
        }
        return acc
      }, {})
      return results
    }
    return {}
  }

  render() {
    const { memberPlan, creditCardNumber, expire, securityCode } = this.state
    return (
      <View style={form.base.container}>
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
          validators={{
            paymentInfo: {
              message: 'Paid Member must regist your payment information',
              validate: () =>
                this.validatePaymentInfoIfNeed(
                  memberPlan,
                  creditCardNumber,
                  expire,
                  securityCode
                )
            }
          }}
        >
          <TextField
            label="Account ID"
            name="email"
            message="This message is related to &quot;name&quot;"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="input your email..."
            style={{
              marginVertical: 30
            }}
            required
            email={{
              message:
                'This message is related to each validator ( ex. email, required..)'
            }}
          />
          <SelectionField
            label="Member Plan"
            name="memberPlan"
            data={this.memberPlan}
            value={this.state.memberPlan}
            onSelect={index =>
              this.setState({ memberPlan: this.memberPlan[index].id })
            }
            placeholder="input your email..."
            renderItem={(item, index, icon) => {
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
                    {item.label}{' '}
                  </Text>
                  <Text
                    style={{
                      flex: 2,
                      padding: 10,
                      paddingLeft: 30
                    }}
                  >
                    ${item.price} / month
                  </Text>
                  <CheckIcon
                    style={{
                      tintColor:
                        item.id === this.state.memberPlan
                          ? '#28B759'
                          : 'transparent'
                    }}
                  />
                </View>
              )
            }}
          />
          <TextField
            label="Credit Card"
            name="creditCardNumber"
            value={this.state.creditCardNumber}
            disabled={this.state.memberPlan === 1}
            onChangeText={creditCardNumber =>
              this.setState({ creditCardNumber })
            }
            renderInput={props => (
              <CreditCardNumber
                {...props}
                editable={!props.disabled}
                style={{
                  marginTop: null,
                  flex: 3
                }}
              />
            )}
            delimiter={' '}
            style={{
              marginTop: 30
            }}
          />
          <TextField
            label="Expire"
            name="expire"
            value={this.state.expire}
            disabled={this.state.memberPlan === 1}
            onChangeText={expire => this.setState({ expire })}
            containerStyle={{
              flex: 3,
              padding: 10,
              justifyContent: 'flex-start'
            }}
            numericStyle={{ fontSize: 13 }}
            delimiterStyle={{
              fontSize: 13,
              color: 'lightgray',
              paddingVertical: 0
            }}
            formatType="shortMonthYear"
            renderInput={props => (
              <YearMonth {...props} editable={!props.disabled} />
            )}
          />
          <TextField
            label="Code"
            name="securityCode"
            value={this.state.securityCode}
            disabled={this.state.memberPlan === 1}
            onChangeText={securityCode => this.setState({ securityCode })}
            placeholder="XXX"
            maxLength={3}
          />

          <ButtonSuccess onPress={() => this.setState({ submit: true })} />
        </Form>
      </View>
    )
  }
}
