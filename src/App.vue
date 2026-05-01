<template>
  <UApp>
    <div
      v-if="workspaceStore.booting"
      class="h-screen flex items-center justify-center"
    >
      <div class="flex items-center gap-3 text-sm text-muted">
        <UIcon
          name="i-lucide-loader-circle"
          class="animate-spin"
        />

        <span>Carregando workspace...</span>
      </div>
    </div>

    <WorkspaceLayout v-if="workspaceStore.hasWorkspace" />

    <WorkspaceEmptyState v-else />
  </UApp>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore.boot()
})
</script>
