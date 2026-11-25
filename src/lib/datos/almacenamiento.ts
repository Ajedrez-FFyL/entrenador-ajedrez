/**
 * Almacenamiento persistente (para que el navegador no borre los datos solo si se queda sin
 * espacio) y estimación de cuánto ocupa la app. `navigator.storage` no existe en todos los
 * navegadores (Safari viejo, por ejemplo): todo acá devuelve `undefined` si no está disponible.
 */

export async function pedirAlmacenamientoPersistente(): Promise<void> {
  try {
    await navigator.storage?.persist?.()
  } catch {
    // Si falla (navegador raro, contexto no seguro), no hay nada para hacer: queda como estaba.
  }
}

export async function estaPersistido(): Promise<boolean | undefined> {
  try {
    return await navigator.storage?.persisted?.()
  } catch {
    return undefined
  }
}

export interface UsoAlmacenamiento {
  usadoBytes: number
  cuotaBytes: number
  porcentaje: number
}

export async function estimarAlmacenamiento(): Promise<UsoAlmacenamiento | undefined> {
  try {
    const r = await navigator.storage?.estimate?.()
    if (!r || r.usage === undefined || !r.quota) return undefined
    return { usadoBytes: r.usage, cuotaBytes: r.quota, porcentaje: (100 * r.usage) / r.quota }
  } catch {
    return undefined
  }
}

export function formatoMB(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
