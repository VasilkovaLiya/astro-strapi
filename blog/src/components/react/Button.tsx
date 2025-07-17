import React from 'react';
import styles from './Button.module.scss';
import { classNames } from '../../lib/css-modules';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    className
}: ButtonProps) {
    const buttonClasses = classNames(
        styles.button,
        {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.outline]: variant === 'outline',
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.disabled]: disabled,
        }
    );

    const finalClassName = className ? `${buttonClasses} ${className}` : buttonClasses;

    return (
        <button
            className={finalClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
} 