import { StyleSheet } from 'react-native'

export const fields = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 50
  },
  label: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20
  },
  input: {
    textAlign: 'center',
    fontSize: 20
  },
  description: {
    fontSize: 13,
    color: 'gray',
    padding: 20,
    textAlign: 'center'
  },
  component: {
    backgroundColor: '#F6F9FA',
    marginHorizontal: 20,
    padding: 10
  }
})

export const common = {
  flatList: StyleSheet.create({
    label: {
      textAlign: 'center',
      padding: 20,
      borderWidth: 0.5,
      borderColor: 'gray'
    },
    container: {
      marginTop: 30
    }
  }),
  textField: StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: 0.3,
      borderColor: 'lightgray',
      backgroundColor: 'white'
    },
    label: {
      flex: 1,
      padding: 10,
      paddingLeft: 30
    },
    content: {
      flex: 3,
      padding: 10
    },
    disabled: {
      backgroundColor: 'lightgray'
    }
  })
}

export const form = {
  base: StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 50
    }
  })
}
