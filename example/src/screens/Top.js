import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  SectionList,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { ArrowIcon } from '../components/Icon'

type Props = {}
export default class Top extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Top'
    }
  }
  sections = [
    {
      title: 'Fields',
      data: ['CreditCardNumber', 'Zipcode', 'Telephone', 'YearMonth']
    },
    {
      title: 'Form',
      data: ['BaseInformation', 'FormatValidator', 'CustomValidator']
    }
  ]
  render() {
    return (
      <View stylze={styles.container}>
        <SectionList
          style={styles.list}
          keyExtractor={(item, index) => `${item}-${index}`}
          sections={this.sections}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.itemHeader}>{title}</Text>
          )}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => this.props.navigation.navigate(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
                <ArrowIcon />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: 'white'
  },
  itemHeader: {
    backgroundColor: '#222222',
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    padding: 20
  },
  itemText: {
    flex: 2,
    padding: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    flex: 1,
    color: '#333333',
    fontWeight: '100',
    backgroundColor: '#F6F9FA',
    padding: 15,
    fontSize: 25,
    textAlign: 'right'
  }
})
