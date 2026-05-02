<template>
  <div class="space-y-3 p-3">
    <div
      v-for="param in request.queryParams"
      :key="param.id"
      class="grid grid-cols-[40px_1fr_1fr_40px] gap-2"
    >
      <UCheckbox v-model="param.enabled" />

      <UInput
        v-model="param.key"
        placeholder="Query param"
      />

      <UInput
        v-model="param.value"
        placeholder="Value"
      />

      <UButton
        icon="i-lucide-trash"
        color="neutral"
        variant="ghost"
        @click="requestStore.removeQueryParam(param.id)"
      />
    </div>

    <UButton
      icon="i-lucide-plus"
      variant="soft"
      @click="requestStore.addQueryParam"
    >
      Add query param
    </UButton>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const requestStore = useRequestStore()
const { request } = storeToRefs(requestStore)
</script>
