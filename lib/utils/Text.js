/**
 * insert some char into string
 * @example
 *  const result = insert('aefg', 'bc', 1)
 *  // result = 'abcdefg'
 */
export function insert(text, char, index) {
  if (index < 0) index = 0
  if (index > text.length) index = text.length
  return `${text.slice(0, index)}${char}${text.slice(
    index,
    index + text.length
  )}`
}

/**
 * generate string splited by delimiter
 * @example
 *  when telephone number format
 *    const result = insertDelimiter('12345678900',[ 3, 7])
 *    // result = '123-4567-8900'
 *
 * @param {string} text -some string
 * @param {array}  intervals
 * @param {string} [delimiter] - some delimiter string
 *
 * @return {string} - string splited by delimiter
 */
export function insertDelimiter(text, intervals, delimiter = ' ') {
  if (delimiter.length !== 1)
    throw new TypeError('length of delimiter must be 1')
  const textWithoutDelimiter = text.replace(new RegExp(delimiter, 'g'), '')
  let index = 0
  let result = textWithoutDelimiter
  intervals.some(value => {
    if (textWithoutDelimiter.length >= value) {
      const cursor = value + index
      result = insert(result, delimiter, cursor)
      index += 1
    }
  })
  return result
}
