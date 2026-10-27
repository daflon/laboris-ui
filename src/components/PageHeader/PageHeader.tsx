import React from 'react';
import './PageHeader.css';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título da página */
  title: string;
  /** Subtítulo opcional */
  subtitle?: string;
  /** Ações (botões, etc) */
  actions?: React.ReactNode;
}

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, subtitle, actions, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`laboris-page-header ${className}`} {...props}>
        <div className="laboris-page-header__content">
          <h1 className="laboris-page-header__title">{title}</h1>
          {subtitle && <p className="laboris-page-header__subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="laboris-page-header__actions">{actions}</div>}
      </div>
    );
  }
);

PageHeader.displayName = 'PageHeader';
