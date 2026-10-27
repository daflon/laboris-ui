import React from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Variante visual */
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  /** Tamanho */
  size?: 'sm' | 'md' | 'lg';
  /** Mostrar indicador de ponto */
  dot?: boolean;
  /** Ícone */
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      dot = false,
      icon,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'laboris-badge',
      `laboris-badge--${variant}`,
      `laboris-badge--${size}`,
      dot && 'laboris-badge--with-dot',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {icon && <span className="laboris-badge__icon">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
