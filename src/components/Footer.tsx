'use client'
import Link from 'next/link'
import { useApp } from '@/lib/context'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">{t('brand')}<em>.</em></div>
          <p className="footer-tagline">{t('f_tagline')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('f_nav')}</h4>
          <ul>
            <li><Link href="/">{t('nav_home')}</Link></li>
            <li><Link href="/projects">{t('nav_work')}</Link></li>
            <li><Link href="/about">{t('nav_about')}</Link></li>
            <li><Link href="/contact">{t('nav_contact')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t('f_serv')}</h4>
          <ul>
            <li><Link href="/contact">{t('s1_name')}</Link></li>
            <li><Link href="/contact">{t('s2_name')}</Link></li>
            <li><Link href="/contact">{t('s3_name')}</Link></li>
            <li><Link href="/contact">{t('s4_name')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t('f_social')}</h4>
          <div className="social-grid">
            {[
              ['Instagram', 'https://instagram.com'],
              ['Telegram',  'https://t.me'],
              ['Max',       'https://max.ru'],
              ['Dribbble',  'https://dribbble.com'],
              ['Vimeo',     'https://vimeo.com'],
            ].map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="social-link">{name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {t('brand')} {t('f_rights')}</span>
        <span className="live-dot">{t('f_live')}</span>
        <span>{t('f_built')}</span>
      </div>
    </footer>
  )
}
