import React from 'react';
import './EmptyState.css';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título */
  title?: string;
  /** Descrição */
  description?: string;
  /** Ícone customizado */
  icon?: React.ReactNode;
  /** Ação (botão para adicionar, etc) */
  action?: React.ReactNode;
}

// Ícone padrão (inbox vazio)
const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title = 'Nenhum item encontrado',
      description,
      icon,
      action,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`laboris-empty ${className}`} {...props}>
        <div className="laboris-empty__icon">
          {icon || <DefaultIcon />}
        </div>
        <h3 className="laboris-empty__title">{title}</h3>
        {description && <p className="laboris-empty__description">{description}</p>}
        {action && <div className="laboris-empty__action">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
