import type { Workspace } from '../features/workspaces'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { createWorkspace, openWorkspace } from '../features/workspaces'

export const useWorkspaceStore = defineStore('workspace', () => {
  const currentWorkspace = ref<Workspace | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const hasWorkspace = computed(() => currentWorkspace.value !== null)

  async function create(path: string, name: string) {
    loading.value = true
    error.value = null
    try {
      currentWorkspace.value = await createWorkspace(path, name)
    }
    catch (err) {
      error.value = String(err)
    }
    finally {
      loading.value = false
    }
  }

  async function open(path: string) {
    loading.value = true
    error.value = null

    try {
      currentWorkspace.value = await openWorkspace(path)
    }
    catch (err) {
      error.value = String(err)
    }
    finally {
      loading.value = false
    }
  }

  function close() {
    currentWorkspace.value = null
    error.value = null
  }

  return {
    currentWorkspace,
    loading,
    error,
    hasWorkspace,
    create,
    open,
    close,
  }
})
