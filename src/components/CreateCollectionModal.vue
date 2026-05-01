<template>
  <UModal
    title="Escolha um nome para a sua collection"
    :ui="{ footer: 'justify-end' }"
  >
    <template #body>
      <UForm
        ref="form"
        :state="state"
        :schema="schema"
        class="space-y-2"
        @submit="submit"
      >
        <UFormField
          name="name"
          label="Nome"
        >
          <UInput
            v-model="state.name"
            placeholder="API Interna"
            class="w-full"
          />
        </UFormField>
      </UForm>
    </template>

    <template #footer>
      <UButton
        label="Cancelar"
        color="neutral"
        variant="outline"
        :disabled="form?.loading"
        @click="$emit('close', false)"
      />

      <UButton
        label="Criar workspace"
        :loading="form?.loading"
        @click="form?.submit"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive, useTemplateRef } from 'vue'
import * as z from 'zod'

export interface CreateCollectionModalProps {
  name?: string
}

export type CreateCollectionModalResult = false | FormSubmitEvent<Schema>
export interface CreateCollecitonModalEmits {
  close: [CreateCollectionModalResult]
}

const props = defineProps<CreateCollectionModalProps>()
const emit = defineEmits<CreateCollecitonModalEmits>()

const schema = z.object({
  name: z.string().nonempty(),
})

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  name: props.name,
})

function submit(data: FormSubmitEvent<Schema>) {
  emit('close', data)
}

const form = useTemplateRef('form')
</script>
