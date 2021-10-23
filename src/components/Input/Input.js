import React from "react";
import clsx from 'clsx';

export default function Input(props) {
	const {
		className,
		onChange,
		text,
		type,
		value
	} = props;

	return (
		<fieldset className={clsx(className, 'fieldset')}>
			<legend className="fieldset__legend">{text}</legend>
			<input
				className="fieldset__input"
				onChange={onChange}
				required
				type={type}
				value={value}
			></input>
		</fieldset>
	)
}