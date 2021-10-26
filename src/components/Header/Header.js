import { LogoutButton } from "../LogoutButton/LogoutButton"

export const Header = () => {
	return (
		<header className="app__header header">
			<div className="header__wrapper">
				<h2 className="header__title title">simple hotel check</h2>
				<LogoutButton />
			</div>
		</header>
	)
}