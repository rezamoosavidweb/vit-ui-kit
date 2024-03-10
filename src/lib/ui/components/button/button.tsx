export function Button({ className, children, ...rest }: React.ComponentProps<'button'>): JSX.Element {
  return (
    <button className={`bg-red-600 rounded-md p-2 ${className ?? ''}`} {...rest}>
      {children}
      RezaButton
    </button>
  );
}
