import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Tamanho do botão */
  size?: 'sm' | 'md' | 'lg';
  /** Se o botão ocupa toda a largura disponível */
  fullWidth?: boolean;
  /** Estado de carregamento */
  loading?: boolean;
  /** Ícone à esquerda */
  leftIcon?: React.ReactNode;
  /** Ícone à direita */
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = [
      'laboris-btn',
      `laboris-btn--${variant}`,
      `laboris-btn--${size}`,
      fullWidth && 'laboris-btn--full-width',
      loading && 'laboris-btn--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="laboris-btn__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" opacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
          </span>
        )}
        {leftIcon && !loading && <span className="laboris-btn__icon laboris-btn__icon--left">{leftIcon}</span>}
        <span className="laboris-btn__text">{children}</span>
        {rightIcon && <span className="laboris-btn__icon laboris-btn__icon--right">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
