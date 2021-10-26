import React from "react";
import { Header } from "../Header/Header";
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
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}