export const BASE_URL: Readonly<string> = process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000'

export enum ENDPOINTS {
  JOBS = '/jobs',
  PROJECTS = '/projects',
  TECHNICAL_TESTS = '/technical-tests',
}
