import React from "react";
import { Link } from "react-router-dom";
import clipbg from "../video/clip.mp4"


const podcastsBooks = [
    {
        id: 1,
        title: '',
        description: '',
        bolim: '',
        image: '',
    },

];

function Card({ item }) {
    return (

        <div className="clip">
            <video autoPlay loop muted playsInline className="clip-video">
                <source src={clipbg} type="video/mp4" />
                
            </video>
        </div>
    );
}
function Clip() {
    return (
        <div className="sectionnn">
            <Link className="podcast" to="/new" >Время клипов</Link>
            <p className="padcastp">Персональная подборка клипов на любимые треки</p>
            <div className="cardsContainer">
                {podcastsBooks.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Clip;