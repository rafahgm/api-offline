import type { CreateCollectionModalProps, CreateCollectionModalResult } from '../components/CreateCollectionModal.vue'
import CreateCollectionModal from '../components/CreateCollectionModal.vue'

export function useCreateCollectionModal() {
  const overlay = useOverlay()

  return (options: CreateCollectionModalProps): Promise<CreateCollectionModalResult> => {
    const modal = overlay.create(CreateCollectionModal, {
      destroyOnClose: true,
      props: options,
    })

    return modal.open()
  }
}
