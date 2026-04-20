'use client'
import Link from 'next/link'
import { useApp } from '@/lib/context'
import { useReveal } from '@/components/useReveal'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import { generateSVG, projects } from '@/lib/data'

const TICKER_KEYS = ['tick_1','tick_2','tick_3','tick_4','tick_5']

export default function Home() {
  const { t } = useApp()
  useReveal()

  const featured = [projects[0], projects[1]]

  return (
    <>
      <Loader />
      <Nav />
      <main className="page-wrapper">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg"><div className="hero-orb" /></div>
          <div className="hero-label"><span>{t('hero_label')}</span></div>
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                <span className="line"><span className="word">{t('hero_1')}</span></span>
                <span className="line"><span className="word italic">{t('hero_2')}</span></span>
              </h1>
              <p className="hero-desc">
                {t('hero_desc_1')}<em>{t('hero_desc_em')}</em>{t('hero_desc_2')}
              </p>
              <div className="hero-cta-row">
                <Link href="/projects" className="btn-primary">
                  <span>{t('cta_work')}</span>
                  <span className="arrow">→</span>
                </Link>
                <Link href="/contact" className="btn-ghost">{t('cta_brief')}</Link>
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-block"><strong>50+</strong>{t('meta_projects')}</div>
              <div className="hero-meta-block"><strong>12</strong>{t('meta_tools')}</div>
            </div>
          </div>
          <div className="ticker">
            <div className="ticker-track">
              {[...TICKER_KEYS, ...TICKER_KEYS].map((key, i) => (
                <span key={i}>{i % 2 === 0 ? <em>{t(key)}</em> : t(key)}</span>
              )).flatMap((el, i) => [el, <span key={`s${i}`} className="star">✦</span>])}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services">
          <div className="section-header reveal">
            <div>
              <div className="section-label"><span>01 — {t('serv_label')}</span></div>
              <h2 className="section-title">{t('serv_title_1')}<br /><em>{t('serv_title_em')}</em></h2>
            </div>
          </div>
          <div className="services-list">
            {[
              { num:'01', nameKey:'s1_name', italic:true,  descKey:'s1_desc' },
              { num:'02', nameKey:'s2_name', italic:false, descKey:'s2_desc' },
              { num:'03', nameKey:'s3_name', italic:true,  descKey:'s3_desc' },
              { num:'04', nameKey:'s4_name', italic:false, descKey:'s4_desc' },
            ].map(s => (
              <div key={s.num} className="service reveal">
                <span className="service-num">{s.num}</span>
                <span className="service-name">{s.italic ? <em>{t(s.nameKey)}</em> : t(s.nameKey)}</span>
                <span className="service-desc">{t(s.descKey)}</span>
                <span className="service-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED WORKS ── */}
        <section className="works">
          <div className="section-header reveal">
            <div>
              <div className="section-label"><span>02 — {t('work_label')}</span></div>
              <h2 className="section-title">{t('work_title_1')} <em>{t('work_title_em')}</em></h2>
            </div>
            <Link href="/projects" className="btn-ghost">{t('work_all')}</Link>
          </div>
          <div className="works-grid">
            {featured.map((p, i) => (
              <article key={p.id} className="work-card reveal">
                <div className="work-visual">
                  <span className="work-tag">{t(`w${i+1}_tag`)}</span>
                  <span className="work-year">{p.year}</span>
                  <div
                    className="work-visual-inner"
                    dangerouslySetInnerHTML={{ __html: generateSVG(p) }}
                  />
                </div>
                <div className="work-meta">
                  <div>
                    <h3 className="work-title">
                      {i === 0 ? <>{t('w1_title')}<em>GAL</em></> : <><em>{t('w2_title_em')}</em>{t('w2_title')}</>}
                    </h3>
                    <span className="work-client">{t(`w${i+1}_client`)}</span>
                  </div>
                  <Link href="/projects" className="work-link">{t(`w${i+1}_link`)}</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="works-footer">
            <Link href="/projects" className="btn-primary">
              <span>{t('work_cta')}</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="process">
          <div className="section-header reveal">
            <div>
              <div className="section-label"><span>03 — {t('proc_label')}</span></div>
              <h2 className="section-title">{t('proc_title_1')} <em>{t('proc_title_em')}</em></h2>
            </div>
          </div>
          <div className="process-grid">
            {[1,2,3,4].map(n => (
              <div key={n} className="process-item reveal">
                <div className="process-num">0{n}</div>
                <h3 className="process-title">{t(`p${n}_title`)}</h3>
                <p className="process-text">{t(`p${n}_text`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <h2 className="cta-title">{t('cta_t_1')}<br /><em>{t('cta_t_em')}</em></h2>
          <Link href="/contact" className="btn-primary">
            <span>{t('cta_btn')}</span>
            <span className="arrow">→</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  )
}
