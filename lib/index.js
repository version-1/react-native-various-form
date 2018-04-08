module.exports = {
  get CreditCardNumber() {
    return require('./components/fields/CreditCardNumber').default;
  },
  get Zipcode() {
    return require('./components/fields/Zipcode').default;
  },
  get Telephone() {
    return require('./components/fields/Telephone').default;
  },
  get YearMonth() {
    return require('./components/fields/YearMonth').default;
  },
  get Form() {
    return require('./components/forms/Form').default;
  },
  get ValidatorFactory() {
    return require('./validators/ValidatorFactory').default;
  }
};
