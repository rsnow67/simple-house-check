export const SortButton = (props) => {
	const {
		text
	} = props;

	return (
		<button className="sort-button">
			{text}
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.4999 7.24264L12.4392 8.3033L9.25724 5.12132L6.07526 8.3033L5.0146 7.24264L9.25724 3L13.4999 7.24264Z" fill="#41522E" />
				<path d="M13.4999 10.8324L12.4392 9.77179L9.25724 12.9538L6.07526 9.77179L5.0146 10.8324L9.25724 15.0751L13.4999 10.8324Z" fill="#41522E" fill-opacity="0.3" />
			</svg>
		</button>
	)
}