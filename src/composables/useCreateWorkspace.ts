import type { CreateWorkspaceModalProps, CreateWorkspaceModalResult } from '../components/CreateWorkspaceModal.vue'
import CreateWorkspaceModal from '../components/CreateWorkspaceModal.vue'

export function useCreateWorkspace() {
  const overlay = useOverlay()

  return (options: CreateWorkspaceModalProps): Promise<CreateWorkspaceModalResult> => {
    const modal = overlay.create(CreateWorkspaceModal, {
      destroyOnClose: true,
      props: options,
    })

    return modal.open()
  }
}
