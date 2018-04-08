import Base from './Base'
import { ZIPCODE } from '../../utils/Constants'

export default class Zipcode extends Base {
  delimiter() {
    return this.props.delimiter || ZIPCODE.delimiter
  }

  intervals() {
    return ZIPCODE.intervals
  }

  maxLength() {
    return ZIPCODE.maxLength
  }

  placeholder() {
    return this.props.placeholder || ZIPCODE.placeholder
  }

  keyboardType() {
    return this.props.keyboardType || ZIPCODE.keyboardType
  }
}
