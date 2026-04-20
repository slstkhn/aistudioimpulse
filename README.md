# ИМПУЛЬС — Нейростудия

Сайт-портфолио нейростудии Импульс. Next.js 14, TypeScript, чистый CSS.

## Локальный запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

1. Залей репозиторий на GitHub
2. Зайди на [vercel.com](https://vercel.com) → **Add New Project**
3. Выбери репозиторий → **Deploy**

Vercel автоматически определит Next.js — никаких настроек не нужно.

## Структура

```
src/
  app/
    page.tsx          # Главная
    projects/page.tsx # Все проекты
    about/page.tsx    # О студии
    contact/page.tsx  # Контакты
    globals.css       # Все стили
    layout.tsx        # Root layout
  components/
    Nav.tsx           # Навигация
    Footer.tsx        # Футер
    Loader.tsx        # Лоадер
    useReveal.ts      # Анимация появления
  lib/
    data.ts           # Проекты, переводы, SVG-генератор
    context.tsx       # Язык и тема (React Context)
```

## Что поменять под себя

- `src/lib/data.ts` — проекты и переводы
- `src/components/Footer.tsx` — ссылки на соцсети
- `src/app/contact/page.tsx` — email
- `src/app/layout.tsx` — метатеги SEO
