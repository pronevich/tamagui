import { MediaQueryObject, setupMatchMedia } from '@tamagui/core'

import { matchMedia } from './matchMedia.native'

export function createMedia<
  A extends {
    [key: string]: MediaQueryObject
  }
>(media: A): A {
  // this should ideally return a diff object that is then passed to createTamagui
  // but works for now we dont really support swapping out media drivers
  setupMatchMedia(matchMedia)
  return media
}
