<template>
  <UDashboardGroup>
    <div class="fixed top-0 left-0 z-1 right-0 bg-elevated/50 px-3 h-12 flex gap-5 items-center">
      <UDashboardSidebarToggle />

      <div class="flex flex-col leading-tight">
        <span class="text-sm font-medium">
          {{ workspaceStore.currentWorkspace?.manifest.name }}
        </span>

        <span class="text-sm text-muted truncate max-w-100">
          {{ workspaceStore.currentWorkspace?.path }}
        </span>
      </div>

      <div class="ml-auto">
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="workspaceStore.close()"
        />
      </div>
    </div>

    <UDashboardSidebar
      resizable
      :ui="{ root: 'top-12' }"
    >
      <template #header>
        <span class="text-xs font-semibold text-muted uppercase">Collections</span>

        <UTooltip text="Criar nova collection">
          <UButton
            class="ml-auto"
            icon="i-lucide-circle-plus"
            color="neutral"
            variant="ghost"
            size="sm"
          />
        </UTooltip>
      </template>

      <template #default>
        <UTree
          v-if="collectionsStore.hasCollections"
          selection-behavior="replace"
          :items="collectionsTree"
        />

        <UEmpty
          v-else
          icon="i-lucide-book-marked"
          title="Você ainda não possui nenhuma collection"
          description="Crie sua primeira collection para fazer as requests"
          :actions="[{
            label: 'Criar collection',
            icon: 'i-lucide-circle-plus',
          }]"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel :ui="{ root: 'pt-12' }">
      <template #body>
        <RequestPanel />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'
import { computed } from 'vue'

const workspaceStore = useWorkspaceStore()
const collectionsStore = useCollectionStore()

const collectionsTree = computed<TreeItem[]>(() => collectionsStore.items.map(c => ({
  label: c.name,
  onSelect: (e) => {
    e.preventDefault()
  },
  children: [
    ...c.requests.map(r => ({ label: r })),
    {
      label: 'Criar nova request',
      icon: 'i-lucide-circle-plus',
    },
  ],
})))
</script>
