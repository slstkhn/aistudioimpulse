'use client'
import { useState } from 'react'
import { useApp } from '@/lib/context'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const SERVICE_TAGS = ['ct_tag1','ct_tag2','ct_tag3','ct_tag4','ct_tag5']

export default function Contact() {
  const { t } = useApp()
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [sent, setSent] = useState(false)

  const toggle = (key: string) => {
    setSelected(prev => {
      const s = new Set(prev)
      s.has(key) ? s.delete(key) : s.add(key)
      return s
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setSelected(new Set())
      ;(e.target as HTMLFormElement).reset()
    }, 2400)
  }

  return (
    <>
      <Loader />
      <Nav />
      <main className="page-wrapper">
        <section className="contact">
          <div className="contact-inner">
            <div>
              <h1 className="contact-title">{t('ct_t_1')}<br /><em>{t('ct_t_em')}</em></h1>
              <p className="contact-text">{t('ct_desc')}</p>
              <a href="mailto:hello@impulse.studio" className="contact-email">hello@impulse.studio</a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-label">{t('ct_name')}</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-row">
                <label className="form-label">{t('ct_contact')}</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-row">
                <label className="form-label">{t('ct_service')}</label>
                <div className="form-tags">
                  {SERVICE_TAGS.map(key => (
                    <span
                      key={key}
                      className={`tag-check${selected.has(key) ? ' selected' : ''}`}
                      onClick={() => toggle(key)}
                    >
                      {t(key)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label className="form-label">{t('ct_msg')}</label>
                <textarea className="form-textarea" rows={3} />
              </div>
              <button type="submit" className={`form-submit${sent ? ' sent' : ''}`}>
                {sent ? t('ct_sent') : t('ct_send')}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
