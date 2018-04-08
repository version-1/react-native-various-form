import Base from './Base'
import { LONG_YEAR, MONTH, SLASH } from '../../../utils/Constants'

export default class LongMonthYear extends Base {
  constructor(props) {
    super(props)
  }

  get inputs() {
    return [
      {
        value: this.month,
        attr: MONTH,
        getValue: text => `${this.year}${SLASH}${text}`
      },
      {
        value: this.year,
        attr: LONG_YEAR,
        getValue: text => `${text}${SLASH}${this.month}`
      }
    ]
  }
}
