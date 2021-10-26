import React from "react";
import clsx from 'clsx';

export const Input = (props) => {
    const {
        className,
        error,
        onChange,
        text,
        type,
        value
    } = props;

    let legendClassName = 'fieldset__legend';
    let inputClassName = 'fieldset__input';
    let errorClassName = 'fieldset__error hidden'

    if (error) {
        legendClassName = `${legendClassName} fieldset__legend_red`;
        inputClassName = `${inputClassName} fieldset__input_red`;
        errorClassName = 'fieldset__error';
    }

    return (
        <fieldset className={clsx(className, 'fieldset')}>
            <legend className={legendClassName}>
                {text}
            </legend>
            <input
                className={inputClassName}
                onChange={onChange}
                required
                type={type}
                value={value}
            ></input>
            <p className={errorClassName}>
                {error}
            </p>
        </fieldset>
    )
}