import React from "react";
import '../static/style.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";





export default function Navbar() {
    return (
        <header className="header">
            <div className="header-left">
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnpBl4WnNlVng6Kw4rWON3wEGQrA0zwALzmXAAYJ-Rmsfk3PvlzLkkP_OcVaFw6P59Q&usqp=CAU" alt="Yandex Music" className="logo" /></Link>
                <nav className="nav">
                    <Link to="/">Главное</Link>
                    <Link to="/music">Подкасты и книги</Link>
                    <Link to="/kids">Детям</Link>
                    <Link to="/collection">Коллекция</Link>
                </nav>

                <div className="container-input">
                    <input type="text" placeholder="Search" name="text" className="input" />
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
                    </svg>
                </div>

            </div>

            <div className="header-right">
                <div className="user-menu">
                    <button className="avatar-button">
                        <img className="imgnav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="User Avatar" />
                    </button>

                </div>
            </div>
        </header>
    )
}