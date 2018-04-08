export const filterKeys = (obj, array) => {
  const keys = Object.keys(obj).filter(item => array.includes(item))
  return keys.reduce((acc, item) => {
    acc[item] = obj[item]
    return acc
  }, {})
}

export const isEmpty = obj => Object.keys(obj).length === 0

export const isPresent = obj => Object.keys(obj).length !== 0

export const isObject = obj => {
  return (
    obj instanceof Object && Object.getPrototypeOf(obj) === Object.prototype
  )
}
