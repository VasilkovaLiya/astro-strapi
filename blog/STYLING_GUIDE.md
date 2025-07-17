# Руководство по стилизации в Astro + React проекте

## Обзор архитектуры

Проект использует гибридный подход к стилизации:

- **Глобальные SCSS стили** для общих элементов и настроек
- **CSS модули** для изолированных стилей компонентов
- **React компоненты** с TypeScript поддержкой
- **Astro компоненты** с поддержкой CSS модулей

## Структура файлов

```
src/
├── styles/                    # Глобальные стили
│   ├── settings/             # Базовые настройки
│   │   ├── _variables.scss   # CSS переменные
│   │   ├── _breakpoints.scss # Медиа-запросы
│   │   ├── _mixins.scss      # SCSS миксины
│   │   └── index.scss        # Главный импорт
│   └── global.scss           # Глобальные стили
├── components/
│   ├── react/                # React компоненты
│   │   ├── Component.tsx
│   │   └── Component.module.scss
│   ├── Component.astro
│   └── Component.module.scss
└── lib/
    └── css-modules.ts        # Утилиты для CSS модулей
```

## Принципы работы

### 1. Глобальные стили (`src/styles/`)

Используются для:
- Сброса CSS
- Глобальной типографики
- Общих переменных и миксинов
- Layout стилей

```scss
// global.css
@import './settings/index';

:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
}


```

### 2. CSS модули (`.module.scss`)

Используются для:
- Изолированных стилей компонентов
- Предотвращения конфликтов имен
- Локальной стилизации

```scss
// Component.module.scss
@import '../../styles/settings/index';

.component {
  color: var(--accent);
 
}
```

### 3. Утилиты (`src/lib/css-modules.ts`)

```typescript
// Объединение классов
combineClasses('base', condition && 'conditional', 'static')

// Условное применение классов
classNames(styles.button, {
  [styles.primary]: variant === 'primary',
  [styles.disabled]: disabled
})
```

## Использование в компонентах

### React компоненты

```tsx
import styles from './Component.module.scss';
import { classNames } from '../../lib/css-modules';

interface Props {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Component({ variant, disabled }: Props) {
  const buttonClass = classNames(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.disabled]: disabled
  });

  return <button className={buttonClass}>Click me</button>;
}
```

### Astro компоненты

```astro
---
import styles from './Component.module.scss';
---

<div class={styles.container}>
  <h1 class={styles.title}>Title</h1>
</div>
```

## Настройки и переменные

### Доступные переменные

```scss
// Цвета
--accent: 136, 58, 234;
--accent-light: 224, 204, 250;
--accent-dark: 49, 10, 101;

// Брейкпоинты
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
```

### Миксины

```scss
// Медиа-запросы

// Flexbox утилиты
@include flex-center;
@include flex-between;
```

## Лучшие практики

1. **Используйте CSS модули для компонентов** - изоляция стилей
2. **Импортируйте настройки в CSS модули** - доступ к переменным
3. **Используйте утилиты для сложной логики** - читаемость кода
4. **Следуйте BEM-подобной структуре** - организация классов
5. **Группируйте связанные стили** - логическая структура

## Примеры компонентов

### Button компонент

```tsx
// Button.tsx
import styles from './Button.module.scss';
import { classNames } from '../../lib/css-modules';

export default function Button({ variant, size, disabled, children }) {
  const buttonClass = classNames(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.small]: size === 'small',
    [styles.disabled]: disabled
  });

  return <button className={buttonClass}>{children}</button>;
}
```

```scss
// Button.module.scss
@import '../../styles/settings/index';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.primary {
  background: linear-gradient(135deg, var(--accent),var(--accent-dark));
  color: white;
}

.small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

## Демо страница

Посетите `/components-demo` для просмотра примеров работы с CSS модулями и React компонентами.

## Заключение

Эта архитектура обеспечивает:
- ✅ Изоляцию стилей компонентов
- ✅ Переиспользование глобальных настроек
- ✅ TypeScript поддержку
- ✅ Гибкость в выборе подхода
- ✅ Современные возможности SCSS 