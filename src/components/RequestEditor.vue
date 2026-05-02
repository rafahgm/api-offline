<template>
  <div class="flex h-full flex-col">
    <div class="border-b border-default p-3">
      <UInput
        v-model="request.name"
        placeholder="Request name"
        class="max-w-md"
      />
    </div>

    <RequestUrlBar />

    <div class="grid min-h-0 flex-1 grid-rows-2">
      <div class="min-h-0 overflow-auto">
        <UTabs
          :items="tabs"
          class="h-full"
        >
          <template #headers>
            <RequestHeadersEditor />
          </template>

          <template #query>
            <RequestQueryEditor />
          </template>

          <template #body>
            <RequestBodyEditor />
          </template>
        </UTabs>
      </div>

      <ResponseViewer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const requestStore = useRequestStore()
const { request } = storeToRefs(requestStore)

const tabs = [
  {
    label: 'Headers',
    slot: 'headers',
  },
  {
    label: 'Query',
    slot: 'query',
  },
  {
    label: 'Body',
    slot: 'body',
  },
]
</script>
