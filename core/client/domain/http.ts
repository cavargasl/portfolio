/* eslint-disable @typescript-eslint/no-explicit-any */
export type Http = {
  get: <T>(url: string, params?: Record<string, any>, config?: any) => Promise<T>
  post: <T>(url: string, params?: Record<string, any>, config?: any) => Promise<T>
  put: <T>(url: string, params?: Record<string, any>, config?: any) => Promise<T>
  delete: <T>(url: string, params?: any, config?: any) => Promise<T>
}
