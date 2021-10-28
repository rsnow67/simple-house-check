import React from "react";
import { getDate } from "../../shared/getDate";
import { Favorites } from "../Favorites/Favorites";
import { Header } from "../Header/Header";
import { HotelsList } from "../HotelsList/HotelsList";
import { SearchForm } from "../SearchForm/SearchForm";

export const HotelsPage = () => {
    return (
        <div className="container">
            <Header />
            <main className="app__main main">
                <section className="hotel-check">
                    <div className="hotel-check__wrapper">
                        <div className="hotel-check__left-inner">
                            <SearchForm />
                            <Favorites />
                        </div>
                        <div className="hotels">
                            <div className="hotels__top-inner">
                                <div className="hotels__title-box">
                                    <h3>Отели</h3>
                                    <svg width="9" height="18" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999878 1.33334L9.66654 10L0.999878 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3>Москва</h3>
                                </div>
                                <p className="hotels__date">
                                    {getDate()}
                                </p>
                            </div>
                            <div className="hotels__carousel">
                                <p>здесь должна быть карусель</p>
                            </div>
                            <p className="hotels__text">Добавлено в Избранное: <span className="hotels__fav-count">3</span> отеля</p>
                            <HotelsList />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}