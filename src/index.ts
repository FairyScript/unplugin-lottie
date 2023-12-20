import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { transform } from './core/transform'

export const unpluginFactory: UnpluginFactory<Options | undefined> = () => ({
  name: 'unplugin-starter',
  transformInclude(id) {
    return id.endsWith('?lottie')
  },
  transform: transform,
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
