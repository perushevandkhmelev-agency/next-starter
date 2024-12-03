import type { CodegenConfig } from '@graphql-codegen/cli'

const eslintDisableContent = `
  /** THIS FILE IS AUTO-GENERATED **/
  /** DO NOT EDIT **/
  /* eslint-disable */
`

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  documents: ['./src/schemas/*.ts', './src/schemas/*.graphql', './src/schemas/fragments/*.ts'],
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    './src/schemas/__generated__/types.ts': {
      plugins: [{ add: { content: eslintDisableContent } }, 'typescript'],
      config: {
        maybeValue: 'T'
      }
    },
    './src/schemas/__generated__/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        folder: '__generated__'
      },
      plugins: [{ add: { content: eslintDisableContent } }, 'typescript-operations'],
      config: {
        useTypeImports: true,
        preResolveTypes: true,
        inlineFragmentTypes: 'combine',
        avoidOptionals: {
          field: true
        }
      }
    }
  }
}

export default codegenConfig
