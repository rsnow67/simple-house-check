import React from "react";
import ExitButton from "../ExitButton/ExitButton";
import SearchForm from "../SearchForm/SearchForm";

export default function Hotels(props) {

	return (
		<div className="container">
			<header className="app__header header">
				<div className="header__wrapper">
					<h2 className="header__title title">simple hotel check</h2>
					<ExitButton className="header__exit-button" text="Выйти" />
				</div>
			</header>
			<main className="app__main main">
				<section className="hotel-check">
					<div className="hotel-check__wrapper">
						<div className="hotel-check__left-inner">
							<SearchForm />
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}