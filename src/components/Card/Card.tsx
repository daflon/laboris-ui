import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Padding interno */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Se o card tem efeito hover */
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ padding = 'none', hoverable = false, className = '', children, ...props }, ref) => {
    const classes = [
      'laboris-card',
      `laboris-card--padding-${padding}`,
      hoverable && 'laboris-card--hoverable',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header
export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Título do card */
  title?: React.ReactNode;
  /** Subtítulo do card */
  subtitle?: React.ReactNode;
  /** Ações do header (botões, etc) */
  actions?: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, actions, className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`laboris-card__header ${className}`} {...props}>
        <div>
          {title && <h3 className="laboris-card__title">{title}</h3>}
          {subtitle && <p className="laboris-card__subtitle">{subtitle}</p>}
          {children}
        </div>
        {actions && <div className="laboris-card__actions">{actions}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Body
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`laboris-card__body ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

// Card Footer
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`laboris-card__footer ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
