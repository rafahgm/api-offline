<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <USelect
        model-value="GET"
        :items="['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE']"
        class="w-32"
      />

      <UInput
        model-value=""
        placeholder="https://api.example.com/users"
        class="flex-1"
      />

      <UButton
        label="Send"
        icon="i-lucide-send"
      />
    </div>

    <UTabs
      :items="[
        { label: 'Params', slot: 'params' },
        { label: 'Headers', slot: 'headers' },
        { label: 'Body', slot: 'body' },
      ]"
    >
      <template #params>
        <div class="p-4 text-sm text-muted">
          Query params serão configurados aqui.
        </div>
      </template>

      <template #headers>
        <div class="p-4 text-sm text-muted">
          Headers serão configurados aqui.
        </div>
      </template>

      <template #body>
        <div class="p-4 text-sm text-muted">
          Body JSON será configurado aqui.
        </div>
      </template>
    </UTabs>
  </div>
</template>
