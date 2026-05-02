<template>
  <div class="flex h-full flex-col border-t border-default">
    <div class="flex items-center justify-between border-b border-default p-3">
      <h3 class="font-medium">
        Response
      </h3>

      <div
        v-if="response"
        class="flex items-center gap-3 text-sm"
      >
        <UBadge
          :color="response.status >= 400 ? 'error' : 'success'"
          variant="soft"
        >
          {{ response.status }}
        </UBadge>

        <span class="text-muted">
          {{ response.durationMs }} ms
        </span>
      </div>
    </div>

    <div class="flex-1 overflow-auto p-3">
      <div
        v-if="loading"
        class="text-sm text-muted"
      >
        Sending request...
      </div>

      <UAlert
        v-else-if="error"
        color="error"
        variant="soft"
        title="Request error"
        :description="error"
      />

      <pre
        v-else-if="response"
        class="whitespace-pre-wrap rounded-lg bg-muted p-4 font-mono text-sm"
      >{{ formattedBody }}</pre>

      <div
        v-else
        class="rounded-lg border border-dashed border-default p-8 text-center text-sm text-muted"
      >
        Send a request to see the response.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const requestStore = useRequestStore()
const { response, error, loading } = storeToRefs(requestStore)

const formattedBody = computed(() => {
  if (!response.value?.body)
    return ''

  try {
    return JSON.stringify(JSON.parse(response.value.body), null, 2)
  }
  catch {
    return response.value.body
  }
})
</script>
