import React from "react";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled = false,
    className,
    ...props
}) => {
    const baseStyles = "px-4 py-2 rounded-md text-white font-semibold transition-colors duration-200";
    const disabledStyles = "bg-gray-400 cursor-not-allowed";

    return (
        <button
            className={`${baseStyles} ${disabled ? disabledStyles : "bg-blue-600 hover:bg-blue-700"} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
};