export const GET_HOTELS = 'HOTELS::GET_HOTELS';
export const FETCH_HOTELS = 'HOTELS::FETCH_HOTELS';

export const getHotels = (payload) => ({
    type: GET_HOTELS,
    payload,
});

export const fetchHotels = () => ({
    type: FETCH_HOTELS
});