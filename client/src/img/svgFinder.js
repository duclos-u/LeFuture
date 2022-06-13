import { get, isNull, isUndefined } from 'lodash'

export const getIcon = (key) => {
  if(isNull(key)){
    return ''
  }
  console.log('===>', key)
  const foundIcon = get(icons, key)
  if(isUndefined(foundIcon)){
    console.error(`[ICONS DEBUGGER] Did not find ${key}`)
    throw new Error(`Implementation Error - icon not found ${key}`)
  }
  console.log('je passe ici')
  console.log(foundIcon)
  return foundIcon.default
}

export const icons = {
  token: {
    avax: require('./token/avax.svg'),
    btc: require('./token/btc.svg')
  },
}
