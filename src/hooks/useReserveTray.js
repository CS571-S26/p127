import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'yu-studios-reserve-tray'

export function useReserveTray() {
  const [trayIds, setTrayIds] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trayIds))
  }, [trayIds])

  const trayCount = trayIds.length

  const api = useMemo(() => ({
    trayIds,
    trayCount,
    addToTray: (productId) => {
      setTrayIds((current) => (
        current.includes(productId) ? current : [...current, productId]
      ))
    },
    removeFromTray: (productId) => {
      setTrayIds((current) => current.filter((id) => id !== productId))
    },
    clearTray: () => {
      setTrayIds([])
    },
    isInTray: (productId) => trayIds.includes(productId),
  }), [trayCount, trayIds])

  return api
}
