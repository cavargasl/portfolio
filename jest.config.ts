import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/core/$1',
  },
}
export default config
