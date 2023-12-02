import type { CodegenConfig } from '@graphql-codegen/cli'

import config from './config'

const eslintDisableContent = `
  /** THIS FILE IS AUTO-GENERATED **/
  /** DO NOT EDIT **/
  /* eslint-disable */
`

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: `${config.apiUrl}/graphql`,
  documents: './schemas/*.ts',
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    './schemas/__generated__/types.ts': {
      plugins: [{ add: { content: eslintDisableContent } }, 'typescript']
    },
    './schemas/__generated__/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        folder: '__generated__'
      },
      plugins: [{ add: { content: eslintDisableContent } }, 'typescript-operations'],
      config: {
        useTypeImports: true,
        preResolveTypes: false
      }
    }
  }
}

export default codegenConfig
