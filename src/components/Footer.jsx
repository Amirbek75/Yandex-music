import React from "react";
import "../static/style.css"

function Footer() {
    return (
        <footer className="footer">
            <div id="footer"></div>
            <br />
            <div className="footer-links">
                <a href="#">Правообладателям</a>
                <a href="#">Пользовательское соглашение</a>
                <a href="#">Правила рекомендаций (РФ)</a>
                <a href="#">Справка</a>

            </div>
            <div className="footer-info">
                <span>Сервис Яндекс Музыка может содержать информацию, не предназначенную для несовершеннолетних</span>
            </div>
            <div className="footer-bottom">

                <div className="footer-rights">
                    <span>© 2024 Яндекс Музыка</span>
                    <span>Проект компании Яндекс</span>
                </div>
            </div>
            <br />
            <br />
            <br />
        </footer>
    )
}
export default Footer;