import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Label do select */
  label?: string;
  /** Opções do select */
  options: SelectOption[];
  /** Placeholder (primeira opção vazia) */
  placeholder?: string;
  /** Tamanho */
  size?: 'sm' | 'md' | 'lg';
  /** Mensagem de erro */
  error?: string;
  /** Texto de ajuda */
  helperText?: string;
  /** Se ocupa toda a largura */
  fullWidth?: boolean;
}

// Ícone chevron
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      size = 'md',
      error,
      helperText,
      fullWidth = false,
      className = '',
      required,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    
    const wrapperClasses = [
      'laboris-select-wrapper',
      fullWidth && 'laboris-select-wrapper--full-width',
    ]
      .filter(Boolean)
      .join(' ');

    const selectClasses = [
      'laboris-select',
      `laboris-select--${size}`,
      error && 'laboris-select--error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label
            htmlFor={selectId}
            className={`laboris-label ${required ? 'laboris-label--required' : ''}`}
          >
            {label}
          </label>
        )}
        <div className="laboris-select-container">
          <select
            ref={ref}
            id={selectId}
            className={selectClasses}
            required={required}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error || helperText ? `${selectId}-helper` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <span className="laboris-select__icon" aria-hidden="true">
            <ChevronIcon />
          </span>
        </div>
        {(error || helperText) && (
          <span
            id={`${selectId}-helper`}
            className={`laboris-select__helper ${error ? 'laboris-select__helper--error' : ''}`}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
