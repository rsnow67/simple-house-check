import React from "react";

export const Button = (props) => {
    const {
        className,
        text,
        type
    } = props;

    return (
        <button
            className={className}
            type={type}
        >
            {text}
        </button>
    )
}

