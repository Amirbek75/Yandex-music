import React from "react";
import { Link } from "react-router-dom";



const podcastsBooks = [
    {
        id: 1,
        title: 'Популярно в Узбекистане',
        image: 'https://avatars.yandex.net/get-music-misc/2413828/mix.5cf0be1058ea3a1e70caa083.background-image.1677083830598/200x200',
    },
    {
        id: 2,
        title: 'Летняя',
        image: 'https://avatars.yandex.net/get-music-misc/40584/mix.57c6c5798e3db0dc66cdb10b.background-image.1717417161864/200x200',
    },
    {
        id: 3,
        title: '100 хитов',
        image: 'https://avatars.yandex.net/get-music-misc/2406661/mix.5f742baa65052c136c99059a.background-image.1710498238336/200x200',
    },
    {
        id: 4,
        title: 'Вечные хиты',
        image: 'https://avatars.yandex.net/get-music-misc/28592/mix.57c6d15a2d3213a86ac653d2.background-image.1701384533372/200x200',
    },

];

function Card({ item }) {
    return (

        <div className="carddd">
            <Link className="padding">{item.title}</Link>

            <img src={item.image} alt={item.title} className="imagess" />



        </div>

    );
}
function Podbor() {
    return (
        <div className="sectionnn">
            <Link className="podcast" to="/new" >Подборки</Link>
            <p className="padcastp">Плейлисты, подобранные под настроение или по жанру</p>
            <div className="cardsContainer">
                {podcastsBooks.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Podbor;