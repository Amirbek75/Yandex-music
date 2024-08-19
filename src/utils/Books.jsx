import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import { LuShare } from "react-icons/lu";


const podcastsBooks = [
    {
        id: 1,
        title: 'TED Лучшее: Мотивация и вдохновение',
        description: 'Избранные вдохновляющие выступления спикеров TED',
        likes: 2785,
        image: 'https://avatars.yandex.net/get-music-content/14247687/e41c3980.a.32581715-1/200x200',
    },
    {
        id: 2,
        title: '«Свидетели Игр»',
        description: 'Станислав Гридасов...',
        likes: 1060,
        image: 'https://avatars.yandex.net/get-music-content/9837520/a8d63207.a.32609754-1/200x200',
    },
    {
        id: 3,
        title: 'Игры',
        description: 'Специальный подкаст Кинопоиска с обсуждением сериала «Игры»',
        likes: 799,
        image: 'https://avatars.yandex.net/get-music-content/13911897/376a1aae.a.32566883-1/200x200',
    },
    {
        id: 4,
        title: 'TED Лучшее: Арт',
        description: 'Избранные выступления спикеров TED об искусстве и творчестве.',
        likes: 398,
        image: 'https://avatars.yandex.net/get-music-content/14082060/12231bd9.a.32512644-1/200x200',
    },

];

function Card({ item }) {
    return (
        <div id="podcast-card" className="cardd">
            <img src={item.image} alt={item.title} className="imagess" />
            <div class="play-button">
                <img src="https://simpleicon.com/wp-content/uploads/play1.png" alt="" style={{ marginLeft: '5px' }} />
            </div>
            <div className="contentt">
                <Link className="itemtitle">{item.title}</Link>
                <p className="description">{item.description}</p>
                <p><LikeButton />{item.likes}</p>
            </div>
        </div>
    );
}
function Books() {
    return (
        <div className="sectionnn">
            <Link className="podcast" to="/music" >Подкасты и книги</Link>
            <p className="padcastp">Слушайте не только музыку</p>
            <div className="cardsContainer">
                {podcastsBooks.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Books;