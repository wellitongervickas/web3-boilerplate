import upperFirst from 'lodash/upperFirst'
import lowerCase from 'lodash/lowerCase'

const toEllipsis = (text: string, initAt?: number, endAt?: number) => {
  if (!initAt && !endAt) return '...'

  if (initAt && text.length <= initAt) return `${text}...`

  if (initAt && text.length > initAt && !endAt)
    return `${text.slice(0, initAt)}...`

  return [text.slice(0, initAt), '...', text.slice(endAt)].join('')
}

const string = {
  upperFirst,
  toEllipsis,
  lowerCase
}

export default string
