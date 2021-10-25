import React from "react";
import Button from '../Button/Button';
import Input from "../Input/Input";

export default function SearchForm(props) {
	return (
		<form
			action="#"
			className="search__form search-form"
		>
			<div className="search-form__inner">
				<Input
					className="search-form__fieldset"
					text="Локация"
					type="text"
				/>
				<Input
					className="search-form__fieldset"
					text="Дата заселения"
					type="date"
				/>
				<Input
					className="search-form__fieldset"
					text="Количество дней"
					type="number"
				/>
				<Button
					className="search-form__button form-button"
					text="Найти"
					type="submit"
				/>
			</div>
		</form >
	)
}