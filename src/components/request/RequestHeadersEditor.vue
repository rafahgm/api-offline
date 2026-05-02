<template>
  <div class="space-y-3 p-3">
    <div
      v-for="header in request.headers"
      :key="header.id"
      class="grid grid-cols-[40px_1fr_1fr_40px] gap-2"
    >
      <UCheckbox v-model="header.enabled" />

      <UInput
        v-model="header.key"
        placeholder="Header"
      />

      <UInput
        v-model="header.value"
        placeholder="Value"
      />

      <UButton
        icon="i-lucide-trash"
        color="neutral"
        variant="ghost"
        @click="requestStore.removeHeader(header.id)"
      />
    </div>

    <UButton
      icon="i-lucide-plus"
      variant="soft"
      @click="requestStore.addHeader"
    >
      Add header
    </UButton>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const requestStore = useRequestStore()
const { request } = storeToRefs(requestStore)
</script>
