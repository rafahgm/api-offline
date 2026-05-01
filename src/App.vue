<template>
  <UApp>
    <UDashboardGroup v-if="workspaceStore.hasWorkspace">
      <div class="fixed top-0 left-0 z-1 right-0 bg-elevated/50 px-3 h-12 flex items-center">
        <UDashboardSidebarToggle />

        <span>workspace</span>
      </div>

      <UDashboardSidebar
        resizable
        :ui="{ root: 'top-12' }"
      >
        <template #default>
          <span>collections</span>
        </template>
      </UDashboardSidebar>

      <UDashboardPanel :ui="{ root: 'pt-12' }">
        <template #body>
          <span>request maker</span>
        </template>
      </UDashboardPanel>
    </UDashboardGroup>

    <WorkspaceEmptyState v-else />
  </UApp>
</template>

<script setup lang="ts">
const workspaceStore = useWorkspaceStore()
</script>
