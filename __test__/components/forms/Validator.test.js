import Validator from '../../../lib/components/forms/Validator'

describe('Validator', () => {
  describe('#new', () => {
    describe('normal case ', () => {
      const targets = {
        hoge: {
          validate: () => {
            'do something'
          },
          message: 'validation error mesage'
        }
      }
      it('throw no error', () =>
        expect(() => {
          new Validator(targets)
        }).not.toThrow())
    })

    describe('fail case ', () => {
      describe('no validator', () => {
        const targets = {
          hoge: {
            validate: undefined,
            message: 'validation error mesage'
          }
        }
        it('throw no error', () =>
          expect(() => {
            new Validator(targets)
          }).toThrow(TypeError))
      })

      describe('no message', () => {
        const targets = {
          hoge: {
            validate: () => {
              'dosomething'
            }
          }
        }
        it('throw no error', () =>
          expect(() => {
            new Validator(targets)
          }).toThrow(TypeError))
      })
    })
  })
  describe('#validate', () => {
    describe('has error', () => {
      describe('single validator', () => {
        const targets = {
          name: {
            validate: () => {
              return { required: 'required error message' }
            },
            message: 'name is invalid'
          }
        }
        const validator = new Validator(targets)
        it('return error object', () => {
          expect(validator.validate()).toEqual({
            result: false,
            errors: {
              name: {
                base: 'name is invalid',
                required: 'required error message'
              }
            },
            messages: ['name is invalid', 'required error message']
          })
        })
      })

      describe('multi validator', () => {
        const targets = {
          email: {
            validate: () => {
              return {
                required: 'required error message',
                email: 'email error message'
              }
            },
            message: 'email is invalid'
          }
        }
        const validator = new Validator(targets)
        it('return error object', () => {
          expect(validator.validate()).toEqual({
            result: false,
            errors: {
              email: {
                base: 'email is invalid',
                required: 'required error message',
                email: 'email error message'
              }
            },
            messages: [
              'email is invalid',
              'required error message',
              'email error message'
            ]
          })
        })
      })
    })
    describe('has no error', () => {
      const targets = {
        name: {
          validate: () => {
            return {}
          },
          message: 'name is invalid'
        }
      }
      const validator = new Validator(targets)
      it('return no error object', () => {
        expect(validator.validate()).toEqual({
          result: true,
          errors: {},
          messages: []
        })
      })
    })
  })
})
