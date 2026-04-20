'use client'
import { useState } from 'react'
import { useApp } from '@/lib/context'
import { useReveal } from '@/components/useReveal'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import { projects, generateSVG, ProjectCat } from '@/lib/data'

type Filter = 'all' | ProjectCat

const FILTERS: { key: Filter; labelKey: string }[] = [
  { key: 'all',   labelKey: 'f_all'   },
  { key: 'video', labelKey: 'f_video' },
  { key: 'web',   labelKey: 'f_web'   },
  { key: 'deck',  labelKey: 'f_deck'  },
  { key: 'app',   labelKey: 'f_app'   },
]

export default function Projects() {
  const { t, lang } = useApp()
  const [filter, setFilter] = useState<Filter>('all')
  useReveal()

  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter)

  return (
    <>
      <Loader />
      <Nav />
      <main className="page-wrapper">
        <section className="projects-hero">
          <div className="projects-hero-inner">
            <h1><span>{t('pj_h_1')} </span><em>{t('pj_h_em')}</em></h1>
            <p>{t('pj_h_desc')}</p>
          </div>
        </section>

        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {t(f.labelKey)}
            </button>
          ))}
          <span className="filter-count">{filtered.length} {t('f_count')}</span>
        </div>

        <div className="projects-grid">
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              className="project-tile reveal"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div
                className="project-tile-visual"
                dangerouslySetInnerHTML={{ __html: generateSVG(p) }}
              />
              <div className="project-tile-meta">
                <div>
                  <h3 className="project-tile-title">{p.title[lang]}</h3>
                  <span className="project-tile-cat">{p.catLabel[lang]}</span>
                </div>
                <span className="project-tile-year">{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
