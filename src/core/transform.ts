import { resolve } from 'path'

export async function transform(code: string, id: string) {
  let imports = ''
  const regex = /u:\s?"(.*?)",\s*?p:\s?"(.*?)"/gm

  const tcode = code.replaceAll(regex, (_: string, u: string, p: string) => {
    const asset = resolve(id, '..', u, p).replaceAll('\\', '/')
    const name = p.replace('.', '')
    imports += `import ${name} from '${asset}';\n`

    return `u:"",p:${name}`
  })

  return imports + tcode
}
