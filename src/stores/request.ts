import type { HttpMethod, HttpResponse } from '../schemas/request.schema'
import { defineStore } from 'pinia'
import { httpRequestSchema } from '../schemas/request.schema'

export const useRequestStore = defineStore('request', {
  state: () => ({
    request: createEmptyRequest(),
    response: null as HttpResponse | null,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    canSend(state) {
      return !!state.request.url.trim() && !state.loading
    },
    enabledHeaders(state) {
      return state.request.headers.filter((item) => {
        return item.enabled && item.key.trim()
      })
    },
    enabledQueryParams(state) {
      return state.request.queryParams.filter((item) => {
        return item.enabled && item.key.trim()
      })
    },
    fullUrl(state) {
      const url = state.request.url.trim()

      if (!url)
        return ''

      const queryParams = this.enabledQueryParams

      if (!queryParams.length)
        return url

      const searchParams = new URLSearchParams()

      for (const param of queryParams) {
        searchParams.append(param.key, param.value)
      }
      const separator = url.includes('?') ? '&' : '?'

      return `${url}${separator}${searchParams.toString()}`
    },
  },
  actions: {
    createRequest() {
      this.request = createEmptyRequest()
      this.response = null
      this.error = null
    },
    touch() {
      this.request.updatedAt = new Date().toISOString()
    },
    updateMethod(method: HttpMethod) {
      this.request.method = method
      this.touch()
    },
    addHeader() {
      this.request.headers.push(createEmptyKeyValue())
      this.touch()
    },
    removeHeader(id: string) {
      this.request.headers = this.request.headers.filter(item => item.id !== id)
      this.touch()
    },
    addQueryParam() {
      this.request.queryParams.push(createEmptyKeyValue())
      this.touch()
    },
    removeQueryParam(id: string) {
      this.request.queryParams = this.request.queryParams.filter(item => item.id !== id)
      this.touch()
    },
    validate() {
      return httpRequestSchema.safeParse(this.request)
    },
    async send() {
      this.error = null

      const validation = this.validate()

      if (!validation.success) {
        this.error = validation.error.issues[0]?.message ?? 'Request inválida'
        return
      }

      if (this.request.body.type === 'json' && this.request.body.content.trim()) {
        try {
          JSON.parse(this.request.body.content)
        }
        catch {
          this.error = 'Body JSON inválido'
          return
        }
      }

      this.loading = true

      try {
        const response = await executeRequest({
          method: this.request.method,
          url: this.fullUrl,
          headers: this.enabledHeaders.map(item => ({
            key: item.key,
            value: item.value,
          })),
          body: this.request.body.type === 'json' ? this.request.body.content : null,
        })

        this.response = response
      }
      catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
      }
      finally {
        this.loading = false
      }
    },
  },
})
