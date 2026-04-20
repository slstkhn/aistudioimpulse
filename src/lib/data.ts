// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
export type Lang = 'ru' | 'en'

export const translations: Record<Lang, Record<string, string>> = {
  ru: {
    brand: 'Импульс',
    nav_home: 'Главная',
    nav_work: 'Проекты',
    nav_about: 'Студия',
    nav_contact: 'Контакты',
    hero_label: 'Нейростудия · Санкт-Петербург · С 2024',
    hero_1: 'Создаём',
    hero_2: 'импульс',
    hero_desc_1: 'Превращаем идеи в ',
    hero_desc_em: 'кинематографичные',
    hero_desc_2: ' ролики, сайты, презентации и приложения — с помощью нейросетей и вкуса.',
    cta_work: 'Смотреть работы',
    cta_brief: 'Обсудить проект',
    meta_projects: 'Проектов',
    meta_tools: 'AI-инструментов',
    tick_1: 'Нейровидео', tick_2: 'Сайты под ключ', tick_3: 'Презентации',
    tick_4: 'Мобильные приложения', tick_5: 'Брендинг',
    serv_label: 'Что делаем',
    serv_title_1: 'Четыре направления.',
    serv_title_em: 'Один почерк.',
    s1_name: 'Нейровидео',
    s1_desc: 'Рекламные ролики, клипы, тизеры с кинематографичной картинкой. ARRI-look, анаморф, Kodak 2383.',
    s2_name: 'Сайты',
    s2_desc: 'Лендинги, портфолио, интернет-магазины. Современный дизайн, плавные анимации, заточка под конверсию.',
    s3_name: 'Презентации',
    s3_desc: 'Инвестиционные, продуктовые, образовательные. Разрабатываем концепцию, текст, визуал и анимации.',
    s4_name: 'Приложения',
    s4_desc: 'Мобильные и веб-приложения на базе AI-пайплайнов. От идеи и UX до рабочего MVP за недели, а не месяцы.',
    work_label: 'Избранное',
    work_title_1: 'Недавние',
    work_title_em: 'работы',
    work_all: 'Все проекты →',
    work_cta: 'Все проекты',
    w1_tag: 'Нейровидео', w1_title: 'Кампания ', w1_client: 'Электроника · 8 роликов', w1_link: 'Смотреть →',
    w2_tag: 'Короткий метр', w2_title_em: 'Echo', w2_title: ' — ретро-фьюче', w2_client: 'Личный проект · 11 сцен', w2_link: 'Смотреть →',
    proc_label: 'Как работаем',
    proc_title_1: 'Процесс',
    proc_title_em: 'в четыре такта',
    p1_title: 'Бриф', p1_text: 'Разбираемся в задаче, аудитории и референсах. Фиксируем цель и метрики.',
    p2_title: 'Концепция', p2_text: 'Визуальный язык, сторилайн, раскадровка. Согласовываем до продакшна.',
    p3_title: 'Продакшн', p3_text: 'Промптинг, генерация, композ, цветокор. Контролируем каждый кадр.',
    p4_title: 'Финал', p4_text: 'Правки, мастеринг, форматы под площадки. Сдаём пакетом.',
    cta_t_1: 'Есть идея?',
    cta_t_em: 'Давайте воплотим.',
    cta_btn: 'Написать нам',
    pj_h_1: 'Все',
    pj_h_em: 'проекты',
    pj_h_desc: 'Фильмы, ролики, сайты, презентации, приложения. Работы 2023—2026 годов, отобранные по принципу: нам до сих пор не стыдно их показывать.',
    f_all: 'Все', f_video: 'Нейровидео', f_web: 'Сайты', f_deck: 'Презентации', f_app: 'Приложения',
    f_count: 'проектов',
    ab_h_1: 'Мы — ', ab_h_em: 'Импульс', ab_h_2: 'Маленькая студия с большим вкусом.',
    ab_desc_1: 'Работаем на стыке ', ab_desc_em: 'кино, дизайна и нейросетей',
    ab_desc_2: '. Делаем контент, который не выглядит как контент: он выглядит как искусство, которое случайно продаёт.',
    man_1: 'Нейросети — это не замена режиссёру. Это ', man_em_1: 'новая оптика',
    man_2: '. Камера, которой не существовало. Мы ', man_hl: 'видим этот инструмент',
    man_3: ' как продолжение руки — и пользуемся им так же аккуратно, как оператор ', man_em_2: 'пользуется светом', man_4: '.',
    man_sig: 'Денис, основатель',
    st_1: 'Проектов сдано', st_2: 'Брендов-клиентов', st_3: 'AI-инструментов', st_4: 'Года опыта',
    tl_1: 'Наш ', tl_em: 'арсенал',
    ct_t_1: 'Напишите', ct_t_em: 'нам.',
    ct_desc: 'Обычно отвечаем в течение нескольких часов. Расскажите о проекте в двух словах — мы перезвоним и уточним детали.',
    ct_name: 'Имя', ct_contact: 'Email или Telegram', ct_service: 'Что интересует',
    ct_tag1: 'Нейровидео', ct_tag2: 'Сайт', ct_tag3: 'Презентация', ct_tag4: 'Приложение', ct_tag5: 'Другое',
    ct_msg: 'Расскажите о проекте', ct_send: 'Отправить', ct_sent: 'Отправлено ✓',
    f_tagline: 'Нейростудия полного цикла. Создаём видео, сайты, презентации и приложения с помощью AI и человеческого вкуса.',
    f_nav: 'Навигация', f_serv: 'Услуги', f_social: 'Соцсети',
    f_rights: '— Все права защищены', f_live: 'Принимаем проекты', f_built: 'Сделано с любовью и нейросетями',
  },
  en: {
    brand: 'Impulse',
    nav_home: 'Home', nav_work: 'Work', nav_about: 'Studio', nav_contact: 'Contact',
    hero_label: 'Neurostudio · Saint Petersburg · Since 2024',
    hero_1: 'Creating', hero_2: 'impulse',
    hero_desc_1: 'Turning ideas into ', hero_desc_em: 'cinematic',
    hero_desc_2: ' films, websites, decks and apps — powered by neural nets and taste.',
    cta_work: 'See our work', cta_brief: 'Start a project',
    meta_projects: 'Projects', meta_tools: 'AI tools',
    tick_1: 'AI Video', tick_2: 'Full-stack Websites', tick_3: 'Presentations',
    tick_4: 'Mobile Apps', tick_5: 'Branding',
    serv_label: 'What we do',
    serv_title_1: 'Four disciplines.',
    serv_title_em: 'One signature.',
    s1_name: 'AI Video',
    s1_desc: 'Ads, clips, teasers with cinematic look. ARRI grade, anamorphic, Kodak 2383.',
    s2_name: 'Websites',
    s2_desc: 'Landing pages, portfolios, e-commerce. Modern design, smooth motion, built to convert.',
    s3_name: 'Decks',
    s3_desc: 'Investor, product, educational. We craft concept, copy, visuals and animations end-to-end.',
    s4_name: 'Apps',
    s4_desc: 'Mobile and web apps powered by AI pipelines. From idea and UX to working MVP in weeks.',
    work_label: 'Featured', work_title_1: 'Recent', work_title_em: 'work',
    work_all: 'All projects →', work_cta: 'All projects',
    w1_tag: 'AI Video', w1_title: 'Campaign ', w1_client: 'Electronics · 8 spots', w1_link: 'View →',
    w2_tag: 'Short Film', w2_title_em: 'Echo', w2_title: ' — retro-future', w2_client: 'Personal · 11 scenes', w2_link: 'View →',
    proc_label: 'How we work', proc_title_1: 'Process', proc_title_em: 'in four beats',
    p1_title: 'Brief', p1_text: 'We map the task, audience, references. Pin down goals and metrics.',
    p2_title: 'Concept', p2_text: 'Visual language, storyline, storyboard. Approved before production.',
    p3_title: 'Production', p3_text: 'Prompting, generation, compositing, grading. Every frame under control.',
    p4_title: 'Finish', p4_text: 'Revisions, mastering, platform formats. Delivered as a package.',
    cta_t_1: 'Got an idea?', cta_t_em: "Let's make it real.", cta_btn: 'Get in touch',
    pj_h_1: 'All', pj_h_em: 'projects',
    pj_h_desc: 'Films, spots, websites, decks, apps. Works from 2023—2026, curated by one simple rule: we\'re still proud to show them.',
    f_all: 'All', f_video: 'AI Video', f_web: 'Web', f_deck: 'Decks', f_app: 'Apps',
    f_count: 'projects',
    ab_h_1: 'We are ', ab_h_em: 'Impulse', ab_h_2: 'A small studio with big taste.',
    ab_desc_1: 'We work at the intersection of ', ab_desc_em: 'cinema, design and neural nets',
    ab_desc_2: ". We make content that doesn't look like content: it looks like art that happens to sell.",
    man_1: "Neural nets don't replace the director. They're ", man_em_1: 'a new optic',
    man_2: ". A camera that didn't exist before. We ", man_hl: 'see this tool',
    man_3: ' as an extension of the hand — and use it as carefully as a DP ', man_em_2: 'handles light', man_4: '.',
    man_sig: 'Denis, founder',
    st_1: 'Projects shipped', st_2: 'Client brands', st_3: 'AI tools', st_4: 'Years of practice',
    tl_1: 'Our ', tl_em: 'arsenal',
    ct_t_1: 'Say', ct_t_em: 'hello.',
    ct_desc: 'We usually reply within a few hours. Tell us about your project in a sentence — we\'ll follow up with details.',
    ct_name: 'Name', ct_contact: 'Email or Telegram', ct_service: "What's on the table",
    ct_tag1: 'AI Video', ct_tag2: 'Website', ct_tag3: 'Deck', ct_tag4: 'App', ct_tag5: 'Other',
    ct_msg: 'Tell us about it', ct_send: 'Send', ct_sent: 'Sent ✓',
    f_tagline: 'Full-cycle neurostudio. We craft videos, websites, decks and apps with AI and human taste.',
    f_nav: 'Navigation', f_serv: 'Services', f_social: 'Social',
    f_rights: '— All rights reserved', f_live: 'Taking on projects', f_built: 'Made with love and neural nets',
  },
}

// ─── PROJECTS DATA ───────────────────────────────────────────────────────────
export type ProjectCat = 'video' | 'web' | 'deck' | 'app'

export interface Project {
  id: number
  title: Record<Lang, string>
  cat: ProjectCat
  year: number
  catLabel: Record<Lang, string>
  grad: [string, string]
  accent: string
  type: string
}

export const projects: Project[] = [
  { id: 1,  title: { ru: 'Кампания GAL',      en: 'GAL Campaign'     }, cat: 'video', year: 2025, catLabel: { ru: 'Нейровидео',   en: 'AI Video'    }, grad: ['#1a1a2e','#2d1810'], accent: '#e8452c', type: 'circuit' },
  { id: 2,  title: { ru: 'Echo · агент 007',   en: 'Echo · agent 007' }, cat: 'video', year: 2025, catLabel: { ru: 'Короткий метр', en: 'Short Film'  }, grad: ['#0d1117','#1a1a2e'], accent: '#8b7355', type: 'frame'   },
  { id: 3,  title: { ru: 'Наследник',          en: 'The Heir'         }, cat: 'video', year: 2025, catLabel: { ru: 'Трейлер',       en: 'Trailer'     }, grad: ['#1a0f0a','#2d1810'], accent: '#c9a961', type: 'dust'    },
  { id: 4,  title: { ru: 'BioPeel',            en: 'BioPeel'          }, cat: 'video', year: 2024, catLabel: { ru: 'Реклама',        en: 'Commercial'  }, grad: ['#0f2027','#1a3a4a'], accent: '#7ec8a8', type: 'bubble'  },
  { id: 5,  title: { ru: 'Волшебные брызги',   en: 'Magic Splashes'   }, cat: 'video', year: 2024, catLabel: { ru: 'Анимация',       en: 'Animation'   }, grad: ['#2d1b3d','#5a3a7a'], accent: '#ffc0cb', type: 'splash'  },
  { id: 6,  title: { ru: 'Finance Tracker',    en: 'Finance Tracker'  }, cat: 'app',   year: 2024, catLabel: { ru: 'Приложение',    en: 'App'         }, grad: ['#0a1628','#1a2a4a'], accent: '#6ea8fe', type: 'chart'   },
  { id: 7,  title: { ru: 'Дневник вайбкодера', en: 'Vibe Coder Diary' }, cat: 'web',   year: 2024, catLabel: { ru: 'Сайт',           en: 'Website'     }, grad: ['#111111','#1a1a1a'], accent: '#e8452c', type: 'grid'    },
  { id: 8,  title: { ru: 'ТПСК',               en: 'TPSK'             }, cat: 'deck',  year: 2024, catLabel: { ru: 'Презентация',   en: 'Deck'        }, grad: ['#1a1414','#3d1a1a'], accent: '#e85454', type: 'layers'  },
  { id: 9,  title: { ru: 'SYNTX · трейлер',    en: 'SYNTX · trailer'  }, cat: 'video', year: 2025, catLabel: { ru: 'Конкурс',        en: 'Contest'     }, grad: ['#0f0a1a','#2a1a3d'], accent: '#c49fff', type: 'stars'   },
  { id: 10, title: { ru: 'Weavy Launch',        en: 'Weavy Launch'     }, cat: 'web',   year: 2025, catLabel: { ru: 'Лендинг',        en: 'Landing'     }, grad: ['#1a1a1a','#2d2d2d'], accent: '#f5a08c', type: 'waves'   },
  { id: 11, title: { ru: 'Инвест-дек',          en: 'Investor Deck'    }, cat: 'deck',  year: 2024, catLabel: { ru: 'Презентация',   en: 'Deck'        }, grad: ['#0a1a0a','#1a3a1a'], accent: '#a8e8a0', type: 'bars'    },
  { id: 12, title: { ru: 'HEIC Converter',      en: 'HEIC Converter'   }, cat: 'app',   year: 2024, catLabel: { ru: 'Утилита',        en: 'Utility'     }, grad: ['#1a1a0a','#3a3a1a'], accent: '#e8d854', type: 'pixels'  },
]

// ─── SVG GENERATOR ───────────────────────────────────────────────────────────
export function generateSVG(p: Project): string {
  const { grad, accent, type, id } = p
  const defs = `<defs>
    <linearGradient id="pg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${grad[0]}"/>
      <stop offset="100%" stop-color="${grad[1]}"/>
    </linearGradient>
    <radialGradient id="pga${id}">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>`
  let body = `<rect width="400" height="500" fill="url(#pg${id})"/>`

  if (type === 'circuit') {
    body += `<circle cx="280" cy="180" r="180" fill="url(#pga${id})"/>
      <g stroke="${accent}" stroke-width="0.5" fill="none" opacity="0.6">
        <path d="M 50 200 L 150 200 L 150 250 L 250 250 L 250 180 L 350 180"/>
        <path d="M 50 320 L 120 320 L 120 380 L 280 380"/>
        <circle cx="150" cy="250" r="4" fill="${accent}"/>
        <circle cx="250" cy="180" r="4" fill="${accent}"/>
        <circle cx="280" cy="380" r="4" fill="${accent}"/>
      </g>`
  } else if (type === 'frame') {
    body += `<rect x="40" y="80" width="320" height="340" fill="none" stroke="#f4f0e8" stroke-width="0.5" opacity="0.4"/>
      <rect x="60" y="120" width="280" height="260" fill="${grad[0]}" opacity="0.8"/>
      <circle cx="200" cy="250" r="60" fill="${accent}" opacity="0.5"/>
      <text x="200" y="450" text-anchor="middle" fill="#f4f0e8" font-family="serif" font-size="11" opacity="0.6" letter-spacing="3">SCENE 07 · TAKE 2</text>`
  } else if (type === 'dust') {
    body += `<circle cx="200" cy="250" r="200" fill="url(#pga${id})"/>`
    for (let i = 0; i < 40; i++) {
      const x = (i * 37 + 13) % 400, y = (i * 53 + 7) % 500, r = (i % 3) * 0.7 + 0.5
      body += `<circle cx="${x}" cy="${y}" r="${r}" fill="${accent}" opacity="${((i % 6) * 0.1) + 0.2}"/>`
    }
  } else if (type === 'bubble') {
    const rs = [60,35,50,25,45,30,55,20,40,70,28,38,65,22,48]
    const xs = [80,250,150,320,60,200,350,120,280,180,310,90,240,380,160]
    const ys = [100,80,200,150,300,350,250,400,300,180,420,260,120,200,380]
    rs.forEach((r,i) => { body += `<circle cx="${xs[i]}" cy="${ys[i]}" r="${r}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="${(i%5)*0.1+0.2}"/>` })
  } else if (type === 'splash') {
    body += `<circle cx="200" cy="250" r="200" fill="url(#pga${id})"/>`
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2
      const x1 = 200 + Math.cos(a) * 60, y1 = 250 + Math.sin(a) * 60
      const len = 100 + (i * 7) % 80
      const x2 = 200 + Math.cos(a) * len, y2 = 250 + Math.sin(a) * len
      body += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${accent}" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>`
    }
    body += `<circle cx="200" cy="250" r="40" fill="${accent}" opacity="0.8"/>`
  } else if (type === 'chart') {
    const hs = [160,200,140,240,180,260,200]
    body += `<g transform="translate(60 100)">${hs.map((h,i) => `<rect x="${i*40}" y="${280-h}" width="24" height="${h}" fill="${accent}" opacity="${0.4+i*0.08}"/>`).join('')}</g>`
    body += `<line x1="40" y1="380" x2="360" y2="380" stroke="#f4f0e8" stroke-width="0.5" opacity="0.3"/>`
  } else if (type === 'grid') {
    body += `<g stroke="${accent}" stroke-width="0.5" opacity="0.4">`
    for (let i = 0; i < 20; i++) body += `<line x1="${i*22}" y1="0" x2="${i*22}" y2="500"/>`
    for (let i = 0; i < 25; i++) body += `<line x1="0" y1="${i*22}" x2="400" y2="${i*22}"/>`
    body += `</g><rect x="100" y="180" width="200" height="140" fill="${accent}" opacity="0.15" stroke="${accent}" stroke-width="1"/>`
  } else if (type === 'layers') {
    body += [0,1,2,3].map(i => `<rect x="${60+i*12}" y="${100+i*20}" width="260" height="200" fill="${accent}" opacity="${0.15+i*0.08}" stroke="${accent}" stroke-width="0.5"/>`).join('')
  } else if (type === 'stars') {
    body += `<circle cx="200" cy="250" r="150" fill="url(#pga${id})"/>`
    const sx = [40,380,120,300,200,80,340,160,260,220,50,370,140,280,190,90,330,100,360,210]
    const sy = [80,60,120,90,200,300,250,180,350,400,420,380,450,150,50,480,320,280,170,440]
    sx.forEach((x,i) => { body += `<circle cx="${x}" cy="${sy[i]}" r="${(i%3)+0.5}" fill="${accent}" opacity="${(i%8)*0.1+0.2}"/>` })
  } else if (type === 'waves') {
    body += `<g stroke="${accent}" fill="none" stroke-width="1" opacity="0.6">`
    for (let i = 0; i < 8; i++) body += `<path d="M 0 ${150+i*40} Q 100 ${120+i*40} 200 ${150+i*40} T 400 ${150+i*40}"/>`
    body += '</g>'
  } else if (type === 'bars') {
    const hs = [80,140,100,180,120,200,160,130]
    body += `<g transform="translate(50 150)">${hs.map((h,i) => `<rect x="${i*38}" y="${220-h}" width="28" height="${h}" fill="${accent}" opacity="0.7"/>`).join('')}</g>`
  } else if (type === 'pixels') {
    body += '<g>'
    const ops = [0.5,0.1,0.4,0.0,0.3,0.6,0.2,0.5,0.1,0.4,0.6,0.3]
    for (let i = 0; i < 120; i++) {
      const col = i % 12, row = Math.floor(i / 12)
      body += `<rect x="${60+col*24}" y="${100+row*24}" width="22" height="22" fill="${accent}" opacity="${ops[i%12]*0.6}"/>`
    }
    body += '</g>'
  }

  return `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs}${body}</svg>`
}
