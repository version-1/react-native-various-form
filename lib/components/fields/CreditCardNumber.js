import Base from './Base'
import { CREDITCARD } from '../../utils/Constants'

export default class CreditCardNumber extends Base {
  delimiter() {
    return this.props.delimiter || CREDITCARD.delimiter
  }

  intervals() {
    return CREDITCARD.intervals
  }

  maxLength() {
    return CREDITCARD.maxLength
  }

  placeholder() {
    return (
      this.props.placeholder ||
      CREDITCARD.placeholder.replace(/-/g, this.delimiter())
    )
  }

  keyboardType() {
    return this.props.keyboardType || CREDITCARD.keyboardType
  }
}
