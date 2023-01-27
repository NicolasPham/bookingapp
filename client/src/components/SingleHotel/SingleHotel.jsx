import './singleHotel.scss';
/**************** Font Awesome *****************/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
  faLocationDot, faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import {useFetch} from '../../hooks/useFetch.js'
import { useLocation } from 'react-router-dom';


const SingleHotel = () => {
/***************************************************/
const location = useLocation();
const path = location.pathname.split('/')[2];
const {data, loading, error} = useFetch(`/hotels/${path}`)

const imgList = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e1/a6/b1/bond-place-hotel.jpg?w=700&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e1/a7/6c/bond-place-hotel.jpg?w=700&h=-1&s=1",
    "https://pix10.agoda.net/hotelImages/4896894/0/4eb370725199289c36e7ff7fe1707e28.jpg?ca=9&ce=1&s=1024x768",
    "https://i.travelapi.com/hotels/1000000/10000/2600/2509/661a351f_z.jpg",
    "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/standard-queen-v16336356-1440.jpg",
    "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/standard-queen-v16336356-1440.jpg",
    "http://www.torontohotelsincanada.com/data/Photos/700x500/4424/442490/442490847.JPEG",
    "https://images.trvl-media.com/hotels/1000000/10000/2600/2509/9f1e7eb8.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
]

const [showImg, setShowImg] = useState(false);
const [imgIndex, setImgIndex] = useState(0);

const handleShowImg = (i) => {
    setShowImg(true);
    setImgIndex(i);
}

const handleSlide = (direction) => {
    let newImgIndex;
    
    if (direction === "l") {
        newImgIndex = imgIndex === 0 ? imgList.length-1 : imgIndex-1;
    } else {
        newImgIndex = imgIndex === imgList.length-1 ? 0 : imgIndex+1;
    }
    console.log(newImgIndex);
    setImgIndex(newImgIndex);
}


/***************************************************/
  return (<>
    {loading ? "Loading" : <section className="flex-column single">
        <header>
            <div className="flex-column content">
                <h1>{data.name}</h1>
                <div className="flex address">
                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span>{data.address}</span>
                </div>
                <p>Exellent location - {data.distance}m from the airport</p>
            </div>
            <button>Reserve or Book Now!</button>
        </header>
        <div className="img">
            {imgList.map((item, index) => (
                <img key={index} src={item} alt="" onClick={() => handleShowImg(index)} />
            ))}
        </div>

        {showImg && <div className="showImg">
            <FontAwesomeIcon icon={faXmark} className="close" onClick={() => setShowImg(false)} />
            <div className="singleImg">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={() => handleSlide("l")}/>
                <img src={imgList[imgIndex]} alt="" />
                <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={() => handleSlide("r")}/>
            </div>
        </div>}
    
        <div className="flex info">
            <div className="content">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>

            <div className="flex-column price">
                <h2>Perfect for 9-night stay</h2>
                <p>Located in the real heart of Toronto, this property has an excellent location score of 9.8!</p>
                <p><b>$945</b> (9 nights)</p>
                <button>Reserve or Bool Now!</button>
            </div>
        </div>
    </section>}
    </>)
}

export default SingleHotel
