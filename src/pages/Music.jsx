import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

export default function Music() {
    return (
        <>
            <Navbar />

            <div className="main-content">
                <h1>Подкасты и книги</h1>
                <nav className="tabs">
                    <Link to="/" className="active">ВСЕ</Link>
                    <Link to="/">АУДИОКНИГИ</Link>
                    <Link to="/">ПОДКАСТЫ</Link>
                </nav>
                <div id="verticle-line"></div>
            </div>

            <Footer />
            <MusicPlayer />
        </>
    )
}