import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/core/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!.*\\.js$)'],
}
export default config
