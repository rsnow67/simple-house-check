import React from "react";
import clsx from 'clsx';

export default function Input(props) {
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

	if (error) {
		legendClassName = `${legendClassName} fieldset__legend_red`;
		inputClassName = `${inputClassName} fieldset__input_red`;
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
			<p className="fieldset__error">
				{error}
			</p>
		</fieldset>
	)
}