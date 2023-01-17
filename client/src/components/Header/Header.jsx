import React from 'react'

import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { listItem } from '../../constant/listItem';




const Header = () => {

  const handleActive = (e) => {
    console.log(e)
  }


  return (
    <section className='flex-column al-center jc-center header'>
      <div className="flex jc-center al-center headerList">
        {listItem.map((item, index) => (
        <div className="flex al-center headerItem" key={index} onClick={handleActive}>
          <FontAwesomeIcon icon={item.icon} />
            <span>{item.name}</span>
        </div>
        ))}
      </div>
      <div className="headerContent">
        <h1>A lifetime of discounts? It's Genius</h1>
        <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free Nicolas Booking account</p>
        <button>Sign in / Register</button>
      </div>
      <div className="flex al-center headerSearch">
        <div className="searchItem">
          <FontAwesomeIcon icon={faBed} className="icon" />
          <input type="text" placeholder='Where are you going?' />
        </div>
        <div className="searchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <span>date to date</span>
        </div>
        <div className="searchItem">
          <FontAwesomeIcon icon={faPerson} className="icon" />
          <span>2 adults 2 children 2 rooms</span>
        </div>
        <div className="searchItem">
          <button>Search</button>
        </div>
      </div>

    </section>
  )
}

export default Header