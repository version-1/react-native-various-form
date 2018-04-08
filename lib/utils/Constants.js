export const TELEPHONE = {
  maxLength: 13,
  delimiter: '-',
  intervals: [3, 7],
  placeholder: '000-0000-0000',
  keyboardType: 'phone-pad'
}

export const CREDITCARD = {
  maxLength: 19,
  delimiter: '-',
  intervals: [4, 8, 12],
  placeholder: 'XXXX-XXXX-XXXX-XXXX',
  keyboardType: 'numeric'
}

export const ZIPCODE = {
  maxLength: 8,
  delimiter: '-',
  intervals: [3],
  placeholder: 'XXX-XXXX',
  keyboardType: 'numeric'
}

export const SLASH = '/'

export const SHORT_YEAR = {
  maxLength: 2,
  placeholder: 'YY',
  keyboardType: 'numeric'
}

export const LONG_YEAR = {
  maxLength: 4,
  placeholder: 'YYYY',
  keyboardType: 'numeric'
}

export const MONTH = {
  maxLength: 2,
  placeholder: 'MM',
  keyboardType: 'numeric'
}
