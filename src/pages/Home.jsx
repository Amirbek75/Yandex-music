import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import videobg from "../video/animation.mp4";
import MusicPlayer from "../components/MusicPlayer";
import Books from "../utils/Books";
import Population from "../utils/Population";
import Podbor from "../utils/Podbor";
import Clip from "../utils/Clip";
import Novie from "../utils/Novie";


function Home() {
    return (
        <div>
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
                <div id="verticle-line"></div>
                <div className="video-container">
                    <video autoPlay loop muted playsInline className="background-video">
                        <source src={videobg} type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <div className="highlight">
                        <h2 className="title" id="position-title"><IoMdPlay size={"25px"} /> Моя волна</h2>
                        <button className="customize-button"><p><VscSettings size={"15px"} />  Настроить</p></button>

                    </div>
                </div>
                <Clip />

                <Books />

                <Novie />

                <Population />

                <Podbor />

            </div>



            <MusicPlayer />


            <Footer />

        </div>
    )
}


export default Home;