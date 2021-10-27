import React from "react";
import { Favorites } from "../Favorites/Favorites";
import { Header } from "../Header/Header";
import { HotelsList } from "../HotelsList/HotelsList";
import { SearchForm } from "../SearchForm/SearchForm";

export const Hotels = () => {
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
                        <div className="hotel-check__right-inner">
                            <HotelsList />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}