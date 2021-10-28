import { put, takeEvery, call } from "redux-saga/effects";
import { getDate } from "../shared/getDate";
import { FETCH_HOTELS, getHotels } from "../store/actions/hotels";


const API_URL_DEFAULT = `http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=${getDate()}&checkOut=${getDate(1)}&limit=10`;

const fetchHotelsFromApi = () => fetch(API_URL_DEFAULT);

function* fetchHotelsWorker() {
    const data = yield call(fetchHotelsFromApi)
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(getHotels(json));
}

export function* hotelsWatcher() {
    yield takeEvery(FETCH_HOTELS, fetchHotelsWorker);
}