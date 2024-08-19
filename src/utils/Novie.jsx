import React from "react";
import { Link } from "react-router-dom";



const podcastsBooks = [
    {
        id: 1,
        title: 'Xatolaring kutarlar',
        description: 'Tohir Sodiqov',
        bolim:'сингл',
        image: 'https://avatars.yandex.net/get-music-content/9868087/ecd84434.a.32506022-1/200x200',
    },
    {
        id: 2,
        title: 'мутки',
        description: 'Zivert',
        bolim:'сингл',
        image: 'https://avatars.yandex.net/get-music-content/10129881/edc377bf.a.32071331-1/200x200',
    },
    {
        id: 3,
        title: 'Нравится жить',
        description: 'Мари Краймбрери',
        bolim:'сингл',
        image:'https://avatars.yandex.net/get-music-content/10126140/85111efb.a.32257349-1/200x200',
    },
    {
        id: 4,
        title: 'Занято',
        description: ' Luxor, SABU',
        bolim:'сингл',
        image: 'https://avatars.yandex.net/get-music-content/13529784/95e30faf.a.32631298-1/200x200',
    },

];

function Card({ item }) {
    return (

        <div id="podcast-card" className="cardd">
            <img src={item.image} alt={item.title} className="imagess" />
            <div class="play-button">
           <img src="https://simpleicon.com/wp-content/uploads/play1.png" alt="" style={{marginLeft:'5px'}}/>
            </div>
            <div className="contentt">
                <Link className="itemtitle">{item.title}</Link>
                <p className="description">{item.description}</p>
                <p className="description">{item.bolim}</p>
            </div>
        </div>
    );
}
function Novie() {
    return (
        <div className="sectionnn">
            <Link className="podcast" to="/new" >Новые релизы</Link>
            <p className="padcastp">Новые треки, альбомы и сборники</p>
            <div className="cardsContainer">
                {podcastsBooks.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>  
    )
}
export default Novie;