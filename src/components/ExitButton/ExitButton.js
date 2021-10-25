import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changeIsAuthed } from "../../actions/login";

export default function ExitButton(props) {
	const {
		className,
		text
	} = props;
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogOut = () => {
		dispatch(changeIsAuthed(false));
		history.push('/login');
		localStorage.setItem('isAuthed', 'null');
	}

	return (
		<button
			className={className}
			onClick={handleLogOut}
			type="button"
		>
			{text}
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M15 16L20 11L15 6" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M20 11H8" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
	)
}