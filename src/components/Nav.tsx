'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context'

export default function Nav() {
  const { t, lang, setLang, theme, toggleTheme } = useApp()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const s = window.scrollY
      setHidden(s > 100 && s > last)
      last = s
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/',         labelKey: 'nav_home',    num: '01' },
    { href: '/projects', labelKey: 'nav_work',    num: '02' },
    { href: '/about',    labelKey: 'nav_about',   num: '03' },
    { href: '/contact',  labelKey: 'nav_contact', num: '04' },
  ]

  return (
    <nav className="nav" style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}>
      <Link href="/" className="nav-logo">
        <span className="dot" />
        <span>{t('brand')}</span>
      </Link>

      <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`nav-link${pathname === l.href ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="num">{l.num}</span>
              {t(l.labelKey)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="lang-switch">
          <button className={`lang-btn${lang === 'ru' ? ' active' : ''}`} onClick={() => setLang('ru')}>RU</button>
          <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        </button>

        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
