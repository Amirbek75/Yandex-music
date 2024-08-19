import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";


const podcastsBooks = [
    {
        id: 1,
        title: 'Громкие новинки: поп',
        description: 'На обложке: Lida, Toxi$ Треки, которые будут звучать повсюду',
        likes: '94 299',
        image: 'https://avatars.yandex.net/get-music-user-playlist/27701/103372440.2440.15177/200x200?1723112115177',
    },
    {
        id: 2,
        title: 'Искра',
        description: 'На обложке: Второй Ка Самые яркие взлёты в Моей волне',
        likes: '106 328',
        image: 'https://avatars.yandex.net/get-music-user-playlist/27701/653503978.1148.75955/200x200?1718970375955',
    },
    {
        id: 3,
        title: 'На рахате',
        description: 'Обложка: HOVANNII Душевные треки с восточным вайбом',
        likes: "3 999",
        image: 'https://avatars.yandex.net/get-music-user-playlist/11360783/653503978.1190.14195/200x200?1723124714195',
    },
    {
        id: 4,
        title: 'Громкие новинки: рэп',
        description: 'На обложке: Big Baby Tape Мастера рифм и цепляющих битов',
        likes: "64 364",
        image: 'https://avatars.yandex.net/get-music-user-playlist/11300679/103372440.2441.87629/200x200?1723129187629',
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
function Population() {
    return (
        <div className="sectionnn">
            <Link className="podcast" to="/new-playlist" >Популярные плейлисты</Link>
            <p className="padcastp">Собрано для вас нашей редакцией</p>
            <div className="cardsContainer">
                {podcastsBooks.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Population;