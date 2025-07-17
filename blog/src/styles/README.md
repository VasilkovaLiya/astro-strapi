# Структура стилей в проекте

Этот проект использует гибридный подход к стилизации, сочетающий глобальные SCSS стили и CSS модули.

## Структура директорий

```
src/
├── styles/                    # Глобальные стили
│   ├── settings/             # Базовые настройки (переменные, миксины, брейкпоинты)
│   │   ├── _variables.scss
│   │   ├── _breakpoints.scss
│   │   ├── _mixins.scss
│   │   └── index.scss        # Главный файл импорта настроек
│   ├── global.css           # Глобальные стили
│   └── README.md             # Эта документация
├── components/
│   ├── react/                # React компоненты
│   │   ├── BlogPost.tsx
│   │   ├── BlogPost.module.scss
│   │   ├── Button.tsx
│   │   └── Button.module.scss
│   ├── Header.astro
│   ├── Header.module.scss
│   └── ...
└── lib/
    └── css-modules.ts        # Утилиты для работы с CSS модулями
```

## Принципы организации

### 1. Глобальные стили (`src/styles/`)
- **settings/** - базовые настройки, переменные, миксины
- **global.scss** - глобальные стили для всего приложения
- Используются для общих стилей, сброса CSS, типографики

### 2. CSS модули (`.module.scss`)
- Располагаются рядом с компонентами
- Импортируют глобальные настройки из `settings/`
- Обеспечивают изоляцию стилей компонентов
- Поддерживают SCSS функциональность

### 3. Утилиты (`src/lib/css-modules.ts`)
- `combineClasses()` - объединение классов
- `classNames()` - условное применение классов
- `CSSModule` - TypeScript тип для CSS модулей

## Использование

### В React компонентах

```tsx
import styles from './Component.module.scss';
import { classNames } from '../../lib/css-modules';

function MyComponent({ variant, disabled }) {
  const buttonClass = classNames(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.disabled]: disabled
  });

  return <button className={buttonClass}>Click me</button>;
}
```

### В Astro компонентах

```astro
---
import styles from './Component.module.scss';
---

<div class={styles.container}>
  <h1 class={styles.title}>Title</h1>
</div>
```

### Импорт глобальных настроек в CSS модулях

```scss
// В Component.module.scss
@import '../../styles/settings/index';

.component {
  color: var(--accent);
}
```

## Преимущества такого подхода

1. **Изоляция стилей** - CSS модули предотвращают конфликты имен
2. **Переиспользование** - глобальные настройки доступны везде
3. **Типизация** - TypeScript поддержка для CSS модулей
4. **Гибкость** - можно использовать как глобальные стили, так и модули
5. **SCSS функциональность** - переменные, миксины, вложенности

## Рекомендации

1. Используйте CSS модули для компонентных стилей
2. Используйте глобальные стили для общих элементов (body, html, типографика)
3. Всегда импортируйте `settings/index.scss` в CSS модули для доступа к переменным
4. Используйте утилиты из `css-modules.ts` для сложной логики классов
5. Следуйте BEM-подобной структуре в CSS модулях 