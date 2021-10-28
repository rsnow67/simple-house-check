import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchHotels } from "../../store/actions/hotels";

export const HotelsList = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(state => state.hotels);

    const requestHotels = useCallback(() => {
        dispatch(fetchHotels());
    }, [dispatch]);

    useEffect(() => {
        requestHotels();
    }, [requestHotels]);

    const renderHotelListItem = useCallback((hotel) => {
        return <li className="hotels__item hotel-card" key={hotel.hotelId}>
            <p className="hotel-card__name">Name: {hotel.hotelName}</p>
            <p className="hotel-card__price">Price From: {hotel.priceFrom}</p>
            <p className="hotel-card__rating">Rating: {hotel.stars} stars</p>
        </li>
    }, [])

    return (
        <ul className="hotels__list">{hotels.map(renderHotelListItem)}</ul>
    )
}