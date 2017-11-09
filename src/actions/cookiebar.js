// Constant definitions
import { COOKIE_ACCEPT } from '../constants'

export function acceptCookies () {
  return {type: COOKIE_ACCEPT, data: {accept: true}}
}
