import { basename } from '@tauri-apps/api/path'
import { open } from '@tauri-apps/plugin-dialog'

export function getFolderName(path: string) {
  return basename(path)
}

export async function pickFolder(title: string) {
  const result = open({
    directory: true,
    multiple: false,
    title,
  })

  if (!result || Array.isArray(result))
    return null

  return result
}
