import type { HttpRequest, HttpResponse, KeyValueItem } from '../schemas/request.schema'
import { invoke } from '@tauri-apps/api/core'

export function executeRequest(request: {
  method: string
  url: string
  headers: Array<{ key: string, value: string }>
  body: string | null
}) {
  return invoke<HttpResponse>('execute_request', {
    req: request,
  })
}

export function createEmptyRequest(): HttpRequest {
  const timestamp = new Date().toISOString()

  return {
    id: crypto.randomUUID(),
    name: 'Request sem nome',
    method: 'GET',
    url: '',
    headers: [],
    queryParams: [],
    body: {
      type: 'none',
      content: '',
    },
    createdAt: timestamp,
    updatedAt: timestamp,
  }
}

export function createEmptyKeyValue(): KeyValueItem {
  return {
    enabled: true,
    id: crypto.randomUUID(),
    key: '',
    value: '',
  }
}
