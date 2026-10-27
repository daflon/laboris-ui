import React from 'react';
import './SearchInput.css';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Tamanho */
  size?: 'sm' | 'md' | 'lg';
  /** Se ocupa toda a largura */
  fullWidth?: boolean;
  /** Callback quando limpar busca */
  onClear?: () => void;
}

// Ícone de busca inline
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

// Ícone de X inline
const ClearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      size = 'md',
      fullWidth = false,
      onClear,
      value,
      className = '',
      placeholder = 'Buscar...',
      ...props
    },
    ref
  ) => {
    const hasValue = value !== undefined && value !== '';

    const wrapperClasses = [
      'laboris-search',
      `laboris-search--${size}`,
      fullWidth && 'laboris-search--full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        <span className="laboris-search__icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          ref={ref}
          type="search"
          className="laboris-search__input"
          placeholder={placeholder}
          value={value}
          {...props}
        />
        {hasValue && onClear && (
          <button
            type="button"
            className="laboris-search__clear"
            onClick={onClear}
            aria-label="Limpar busca"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
