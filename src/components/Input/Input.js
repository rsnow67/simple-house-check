import '../../css/style.css';
import React from "react";

export default function Input(props) {
	const {
		className,
		onChange,
		type,
		value
	} = props;

	return (
		<input
			className={className}
			onChange={onChange}
			type={type}
			value={value}
		></input>
	)
}