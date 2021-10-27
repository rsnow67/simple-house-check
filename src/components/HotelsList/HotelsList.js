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
        return <li className="hotels__item" key={hotel.hotelId}>
            <p>Name: {hotel.hotelName}</p>
            <p>Price From: {hotel.priceFrom}</p>
            <p>Rating: {hotel.stars} stars</p>
        </li>
    }, [])

    return (
        <section className="hotels">
            <div className="hotels__inner">
                <ul className="hotels__list">{hotels.map(renderHotelListItem)}</ul>
            </div>
        </section>
    )
}