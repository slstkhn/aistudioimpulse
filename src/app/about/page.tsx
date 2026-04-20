'use client'
import { useApp } from '@/lib/context'
import { useReveal } from '@/components/useReveal'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const TOOLS = ['Midjourney','Runway ML','Kling AI','SYNTX','Luma Dream','Suno','ElevenLabs','Weavy','Figma','Webflow','After Effects','DaVinci Resolve']
const STATS = ['st_1','st_2','st_3','st_4']
const STAT_VALS = ['50+','28','12','3']

export default function About() {
  const { t } = useApp()
  useReveal()

  return (
    <>
      <Loader />
      <Nav />
      <main className="page-wrapper">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {t('ab_h_1')}<em>{t('ab_h_em')}</em>.<br />{t('ab_h_2')}
          </h1>
          <p className="about-hero-text">
            {t('ab_desc_1')}<em>{t('ab_desc_em')}</em>{t('ab_desc_2')}
          </p>
        </section>

        <section className="manifesto">
          <div className="manifesto-inner reveal">
            <p className="manifesto-quote">
              {t('man_1')}<em>{t('man_em_1')}</em>
              {t('man_2')}<span className="hl">{t('man_hl')}</span>
              {t('man_3')}<em>{t('man_em_2')}</em>{t('man_4')}
            </p>
            <div className="manifesto-sig">{t('man_sig')}</div>
          </div>
        </section>

        <section className="stats">
          {STATS.map((key, i) => (
            <div key={key} className="stat reveal">
              <div className="stat-num"><em>{STAT_VALS[i]}</em></div>
              <div className="stat-label">{t(key)}</div>
            </div>
          ))}
        </section>

        <section className="tools">
          <h2 className="tools-title">{t('tl_1')}<em>{t('tl_em')}</em></h2>
          <div className="tools-list">
            {TOOLS.map(tool => (
              <span key={tool} className="tool-chip">{tool}</span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
