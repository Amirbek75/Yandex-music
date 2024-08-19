import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

export default function Chart() {
    return (
        <>
            <Navbar />

            <div className="main-content">
                <h1>Главное</h1>
                <nav className="tabs">
                    <Link to="/" className="active">ВСЕ</Link>
                    <Link to="/moods">НАСТРОЕНИЯ И ЖАНРЫ</Link>
                    <Link to="/new">НОВЫЕ РЕЛИЗЫ</Link>
                    <Link to="/chart">ЧАРТ</Link>
                    <Link to="/collections">ПОДБОРКИ</Link>
                    <Link to="/neuromusic">НЕЙРОМУЗЫКА</Link>
                </nav>
            </div>
            <Footer />
            <MusicPlayer />
        </>
    )
}