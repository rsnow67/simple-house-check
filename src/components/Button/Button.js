import '../../css/style.css';
import React from "react";

export default function Button(props) {
	const {
		className,
		onSubmit,
		text,
		type
	} = props;

	return (
		<button
			className={className}
			onClick={onSubmit}
			type={type}
		>
			{text}
		</button>
	)
}

