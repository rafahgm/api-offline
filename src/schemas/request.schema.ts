import { z } from 'zod'

export const httpMethodSchema = z.enum([
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
])

export const keyValueSchema = z.object({
  id: z.string(),
  enabled: z.boolean().default(true),
  key: z.string(),
  value: z.string(),
})

export const requestBodySchema = z.object({
  type: z.enum(['none', 'json']).default('none'),
  content: z.string().default(''),
})

export const httpRequestSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  method: httpMethodSchema,
  url: z.string().min(1),
  headers: z.array(keyValueSchema).default([]),
  queryParams: z.array(keyValueSchema).default([]),
  body: requestBodySchema.default({
    type: 'none',
    content: '',
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const httpResponseSchema = z.object({
  status: z.number(),
  statusText: z.string().optional(),
  headers: z.record(z.string(), z.string()),
  body: z.string(),
  durationMs: z.number(),
})

export type HttpMethod = z.infer<typeof httpMethodSchema>
export type KeyValueItem = z.infer<typeof keyValueSchema>
export type HttpRequest = z.infer<typeof httpRequestSchema>
export type HttpResponse = z.infer<typeof httpResponseSchema>
