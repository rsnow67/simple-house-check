import { SortButton } from "../SortButton/SortButton"

export const Favorites = (props) => {
	return (
		<div className="favorites">
			<h3 className="favorites__title title">Избранное</h3>
			<div className="favorites__button-box">
				<SortButton text="Рейтинг" />
				<SortButton text="Цена" />
			</div>
			<ul className="favorites__list">
				<li className="favorites__item hotel-card"></li>
				<li className="favorites__item hotel-card"></li>
				<li className="favorites__item hotel-card"></li>
			</ul>
		</div>
	)
}