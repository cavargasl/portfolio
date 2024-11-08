import { sortArray } from '@core/shared/utils'

describe('sortArray', () => {
  const array = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ]

  test('sorts array by age in ascending order', () => {
    const sortedArray = sortArray(array, 'age', 'asc')
    expect(sortedArray).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 35 },
    ])
  })

  test('sorts array by age in descending order', () => {
    const sortedArray = sortArray(array, 'age', 'desc')
    expect(sortedArray).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
    ])
  })

  test('sorts array by name in ascending order', () => {
    const sortedArray = sortArray(array, 'name', 'asc')
    expect(sortedArray).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
    ])
  })

  test('sorts array by name in descending order', () => {
    const sortedArray = sortArray(array, 'name', 'desc')
    expect(sortedArray).toEqual([
      { name: 'John', age: 30 },
      { name: 'Bob', age: 35 },
      { name: 'Alice', age: 25 },
    ])
  })

  test('returns empty array when input is empty', () => {
    const sortedArray = sortArray([], 'name', 'asc')
    expect(sortedArray).toEqual([])
  })

  test('sorts array by age in default order ascending', () => {
    const sortedArray = sortArray(array, 'age')
    expect(sortedArray).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 35 },
    ])
  })
})
