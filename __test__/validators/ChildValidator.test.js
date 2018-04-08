import ChildValidator from '../../lib/validators/ChildValidator'

describe('ChildValidator', () => {
  describe('#validate', () => {
    describe('no validator', () => {
      const validator = new ChildValidator('name', '', '', {})
      it('return empty object', () => {
        expect(validator.validate()).toEqual({})
      })
    })
    describe('one validator', () => {
      describe('error case', () => {
        const validator = new ChildValidator('name', '', '', {
          required: true
        })
        it('return error object', () => {
          expect(validator.validate()).toEqual({
            required: 'Please input name'
          })
        })
      })

      describe('no error case', () => {
        const validator = new ChildValidator('name', 'hoge', '', {
          required: true
        })
        it('return empty object', () => {
          expect(validator.validate()).toEqual({})
        })
      })
    })

    describe('multiple validator', () => {
      describe('nerror case', () => {
        const validator = new ChildValidator('email', '', '', {
          required: true,
          email: true
        })
        it('return error object', () => {
          expect(validator.validate()).toEqual({
            required: 'Please input email',
            email: 'email is invalid Email Format'
          })
        })
      })

      describe('no error case', () => {
        const validator = new ChildValidator('email', 'hoge@example.com', '', {
          required: true,
          email: true
        })
        it('return empty object', () => {
          expect(validator.validate()).toEqual({})
        })
      })
    })

    describe('validator has message', () => {
      const validator = new ChildValidator('name', '', '', {
        required: { message: 'this is custom message' }
      })
      it('return empty object', () => {
        expect(validator.validate()).toEqual({
          required: 'this is custom message'
        })
      })
    })
  })
})
