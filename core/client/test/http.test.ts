import { type Http } from '../domain/http'

describe('http type', () => {
  let http: Http
  const url = 'https://api.example.com/data'

  beforeEach(() => {
    http = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    }
  })

  it('should call get with correct parameters', async () => {
    const params = { id: 1 }
    const config = { headers: { 'Authorization': 'Bearer token' } }
    await http.get(url, params, config)
    expect(http.get).toHaveBeenCalledWith(url, params, config)
  })

  it('should call post with correct parameters', async () => {
    const params = { name: 'test' }
    const config = { headers: { 'Authorization': 'Bearer token' } }
    await http.post(url, params, config)
    expect(http.post).toHaveBeenCalledWith(url, params, config)
  })

  it('should call put with correct parameters', async () => {
    const urlWithId = `${url}/1`
    const params = { name: 'updated name' }
    const config = { headers: { 'Authorization': 'Bearer token' } }
    await http.put(urlWithId, params, config)
    expect(http.put).toHaveBeenCalledWith(urlWithId, params, config)
  })

  it('should call delete with correct parameters', async () => {
    const url = 'https://api.example.com/data/1'
    const params = { force: true }
    const config = { headers: { 'Authorization': 'Bearer token' } }

    await http.delete(url, params, config)
    expect(http.delete).toHaveBeenCalledWith(url, params, config)
  })

  it('should return the correct response', async () => {
    const params = { id: 1 }
    const config = { headers: { 'Authorization': 'Bearer token' } }
    const response = { data: 'response' }

    http.get = jest.fn().mockResolvedValue(response)

    const result = await http.get(url, params, config)

    expect(result).toEqual(response)
  })

  it('should throw an error if the response is not successful', async () => {
    const params = { id: 1 }
    const config = { headers: { 'Authorization': 'Bearer token' } }
    const response = { status: 400, data: 'error' }
    http.get = jest.fn().mockRejectedValue(new Error(response.data))
    await expect(http.get(url, params, config)).rejects.toThrow(response.data)
  })

  it('should return the correct response when not send params or config', async () => {
    const response = { data: 'response' }
    http.get = jest.fn().mockResolvedValue(response)
    const result = await http.get(url)
    expect(http.get).toHaveBeenCalledWith(url)
    expect(result).toEqual(response)
  })

  it('should return data with defined type', async () => {
    const expectedResponse = { data: 'example', ok: true, status: 200 }
    http.get = jest.fn().mockResolvedValue(expectedResponse)
    const result = await http.get<{ data: string; ok: boolean; status: number }>(url)
    expect(result).toEqual(expectedResponse)
    expect(typeof result.data).toBe('string')
    expect(typeof result.ok).toBe('boolean')
    expect(typeof result.status).toBe('number')
  })
})
