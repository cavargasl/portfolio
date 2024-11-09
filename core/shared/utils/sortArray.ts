import { type Order } from '../domain'

export function sortArray<T>(array: T[], key: keyof T, order: Order = 'asc'): T[] {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : -1) * (order === 'asc' ? 1 : -1))
}
