// Утилита для работы с CSS модулями
export function combineClasses(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Тип для CSS модулей
export type CSSModule = {
  [key: string]: string;
};

// Утилита для условного применения классов
export function classNames(
  baseClass: string,
  conditionalClasses: Record<string, boolean> = {}
): string {
  const classes = [baseClass];
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.join(' ');
} 