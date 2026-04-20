'use client'
import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context'

export default function Loader() {
  const { t } = useApp()
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-mark">{t('brand')}<span style={{ color: 'var(--accent)' }}>.</span></div>
    </div>
  )
}
