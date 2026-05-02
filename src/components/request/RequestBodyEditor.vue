<template>
  <div class="space-y-3 p-3">
    <USelect
      v-model="request.body.type"
      :items="bodyTypeOptions"
      class="w-40"
    />

    <UTextarea
      v-if="request.body.type === 'json'"
      v-model="request.body.content"
      placeholder="{&#10;  &quot;name&quot;: &quot;John&quot;&#10;}"
      :rows="16"
      class="font-mono"
    />

    <div
      v-else
      class="rounded-lg border border-dashed border-default p-8 text-center text-sm text-muted"
    >
      This request has no body.
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const requestStore = useRequestStore()
const { request } = storeToRefs(requestStore)

const bodyTypeOptions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'JSON',
    value: 'json',
  },
]
</script>
