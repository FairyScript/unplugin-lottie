import { describe, expect, it } from 'vitest'
import { transform } from './transform'

describe('transform', () => {
  it('should transform the code correctly', async () => {
    const code = `u: "path/to/file", p: "file.png"`
    const expected = `import filepng from './path/to/file/file.png';\nu:"",p:filepng`
    const result = transform(code)
    expect(result).toEqual(expected)
  })

  it('should handle multiple occurrences of code correctly', async () => {
    const code = `u: "path/to/file1", p: "file1.png"\nu: "path/to/file2", p: "file2.png"`
    const expected = `import file1png from './path/to/file1/file1.png';\nimport file2png from './path/to/file2/file2.png';\nu:"",p:file1png\nu:"",p:file2png`
    const result = transform(code)
    expect(result).toEqual(expected)
  })

  it('should handle backslashes in file paths correctly', async () => {
    const code = `u: "path\\to\\file", p: "file.png"`
    const expected = `import filepng from './path/to/file/file.png';\nu:"",p:filepng`
    const result = transform(code)
    expect(result).toEqual(expected)
  })
})
