<template>
  <div class="flex-1 p-4 space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-medium">
        Response
      </h3>

      <div class="flex gap-2 text-xs text-muted">
        <span>Status: —</span>

        <span>Time: —</span>

        <span>Size: —</span>
      </div>
    </div>

    <UTabs
      :items="[
        { label: 'Body', slot: 'body' },
        { label: 'Headers', slot: 'headers' },
        { label: 'Raw', slot: 'raw' },
      ]"
    >
      <template #body>
        <div class="rounded-md border border-default p-4 min-h-64 text-sm text-muted">
          A resposta formatada aparecerá aqui.
        </div>
      </template>

      <template #headers>
        <div class="rounded-md border border-default p-4 min-h-64 text-sm text-muted">
          Headers da resposta aparecerão aqui.
        </div>
      </template>

      <template #raw>
        <div class="rounded-md border border-default p-4 min-h-64 text-sm text-muted">
          Resposta bruta aparecerá aqui.
        </div>
      </template>
    </UTabs>
  </div>
</template>
