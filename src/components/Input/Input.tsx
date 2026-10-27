import React from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label do input */
  label?: string;
  /** Tamanho do input */
  size?: 'sm' | 'md' | 'lg';
  /** Mensagem de erro */
  error?: string;
  /** Texto de ajuda */
  helperText?: string;
  /** Ícone à esquerda */
  leftIcon?: React.ReactNode;
  /** Ícone à direita */
  rightIcon?: React.ReactNode;
  /** Se ocupa toda a largura */
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      required,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const wrapperClasses = [
      'laboris-input-wrapper',
      fullWidth && 'laboris-input-wrapper--full-width',
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      'laboris-input',
      `laboris-input--${size}`,
      error && 'laboris-input--error',
      leftIcon && 'laboris-input--with-left-icon',
      rightIcon && 'laboris-input--with-right-icon',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label
            htmlFor={inputId}
            className={`laboris-label ${required ? 'laboris-label--required' : ''}`}
          >
            {label}
          </label>
        )}
        <div className="laboris-input-container">
          {leftIcon && (
            <span className="laboris-input__icon laboris-input__icon--left" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            required={required}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error || helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightIcon && (
            <span className="laboris-input__icon laboris-input__icon--right" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
        {(error || helperText) && (
          <span
            id={`${inputId}-helper`}
            className={`laboris-input__helper ${error ? 'laboris-input__helper--error' : ''}`}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
