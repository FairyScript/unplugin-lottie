import { join } from 'path'

export function transform(code: string) {
  let imports = ''
  const regex = /u:\s?"(.*?)",\s*?p:\s?"(.*?)"/gm

  const tcode = code.replaceAll(regex, (_: string, u: string, p: string) => {
    const asset = './' + join(u, p).replaceAll('\\', '/')
    const name = p.replace('.', '')
    imports += `import ${name} from '${asset}?import';\n`

    return `u:"",p:${name}`
  })

  return imports + tcode
}
