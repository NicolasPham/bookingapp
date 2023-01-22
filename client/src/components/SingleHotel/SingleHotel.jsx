import './singleHotel.scss';
/**************** Font Awesome *****************/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
  faLocationDot, faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const SingleHotel = () => {
/***************************************************/
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
  return (
    <section className="flex-column single">
        <header>
            <div className="flex-column content">
                <h1>Bond Place Hotel</h1>
                <div className="flex address">
                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span>65 Dundas St E, Toronto, ON M5B 2G8</span>
                </div>
                <p>Exellent location - 500m from the airport</p>
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
                <h1>Stay in the heart of Toronto</h1>
                <p>The Bond Place Hotel Downtown Toronto is ideally located in the heart of downtown Toronto at Yonge and Dundas Square. The Hotel is across the street from the Eaton Centre and steps away from the Toronto Theatre District, including the Canon Theatre, Massey Hall, Elgin/Winter Garden Theatre, The Panasonic Theatre, and other local area attractions. Many downtown corporate and government offices, colleges and universities, are within walking distance. The Hotel is also central to downtown Toronto hospitals, with St. Michael's Hospital located across the street.</p>
            </div>

            <div className="flex-column price">
                <h2>Perfect for 9-night stay</h2>
                <p>Located in the real heart of Toronto, this property has an excellent location score of 9.8!</p>
                <p><b>$945</b> (9 nights)</p>
                <button>Reserve or Bool Now!</button>
            </div>
        </div>
    </section>
  )
}

export default SingleHotel
