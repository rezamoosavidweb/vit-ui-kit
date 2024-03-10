import styles from './checkbox.module.scss';

/** Checkbox component */
export function Checkbox({ children, className, ...rest }: React.ComponentProps<'div'>): JSX.Element {
  const checkboxClasses = [styles.checkboxLayout, 'bg-red-600 p-2', className].filter(Boolean).join(' ');

  return (
    <div className={checkboxClasses} data-testid="checkbox">
      <label>{<span data-testid="checkbox-label">{children} HOSSEINCheckbox</span>}</label>
    </div>
  );
}
