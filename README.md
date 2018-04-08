# react-native-various-form

React Native Various Form provides some components for Input Form.
You can implement Field, Form and Validator easily on React Native.

Please try example.

#### Credit Card Field

<img src="./example/src/assets/gif/credit-card.gif"/>

#### Form

<img src="./example/src/assets/gif/form.gif" />

## Installation

```bash
npm install react-native-various-form
```

or

```bash
yarn add react-native-various-form
```

## Example

```bash
git clone https://github.com/version-1/react-native-various-form
cd react-native-various-form/example yarn install
cd ../
yarn example:ios
```

#### run test

```bash
git clone https://github.com/version-1/react-native-various-form
cd react-native-various-form
yarn test
```

If you ran example once, you need to remove node_modules in ./example

```bash
ls -ld example/node_modules && rm -rf example/node_modules
```

you can use following components in example

##### Field

* Credit Card Number Field
* Telephone Number Field
* Zip Code Field
* Year Month Field

##### Form

* Base BaseInformation Form
* Custom Validator Form
* Format Validator Form

## How to Use

It is easy to understand how to use form.
Reading following source is better way to do that.

### Form

```jsx
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
```

If you pass pros "name" and "value" to component to want to validate.
And, set the trigger to start to validate. Form watch trigger and when
trigger is true, form start to validate.

When form finish to validate, it returns error object like following source in onSubmit.

```jsx
onSubmit={({ result, errors, messages }) => {
  if (result) {
    Alert.alert('Login Success!!')
  } else {
    Alert.alert(messages[0])
  }
  this.setState({ submit: false })
}}
```

If you want to validate or do something depend on result of that before submit,
you can implement the process as you like.

### Field

You can use field like other react native components.

```jsx
import { CreditCardNumber } from 'react-native-various-form'

<View style={fields.container}>
  <Text style={fields.label}>Let's Try</Text>
  <CreditCardNumber
    style={fields.component}
    value={this.state.value}
    onChangeText={text => this.setState({ value: text })}
  />
</View>
```
