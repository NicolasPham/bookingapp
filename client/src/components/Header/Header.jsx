import React, { useState } from "react";

import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { listItem } from "../../constant/listItem";

// Date picker
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  //////////////////////////////////////////////
  const handleActive = (e) => {
    console.log(e);
  };

  //------Date---------
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //------Options---------

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const addAdult = () => {
    setOptions((options.adult += 1));
    console.log(options);
  };
  const [openOptions, setOpenOptions] = useState(false);

  //////////////////////////////////////////////
  return (
    <section className="flex-column al-center jc-center header">
      <div className="flex jc-center al-center headerList">
        {listItem.map((item, index) => (
          <div
            className="flex al-center headerItem"
            key={index}
            onClick={handleActive}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="headerContent">
        <h1>A lifetime of discounts? It's Genius</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Nicolas Booking account
        </p>
        <button>Sign in / Register</button>
      </div>
      <div className="flex al-center headerSearch">
        <div className="searchItem">
          <FontAwesomeIcon icon={faBed} className="icon" />
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="searchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="icon" />
          <span onClick={() => setOpenDate(!openDate)}>{`${format(
            date[0].startDate,
            "MM/dd/yyyy"
          )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
        <div className="searchItem">
          <FontAwesomeIcon icon={faPerson} className="icon" />
          <span onClick={() => setOpenOptions(!openOptions)}>
            2 adults 2 children 2 rooms
          </span>
          {openOptions && (
            <div className="flex-column options">
              <div className="item">
                <span>Adult</span>
                <div className="adjust">
                  <button onClick={() => setOptions(options.adult - 1)}>
                    -
                  </button>
                  <span>{options.adult}</span>
                  <button onClick={addAdult}>+</button>
                </div>
              </div>
              <div className="item">
                <span>Children</span>
                <div className="adjust">
                  <button>-</button>
                  <span>{options.children}</span>
                  <button>+</button>
                </div>
              </div>
              <div className="item">
                <span>Room</span>
                <div className="adjust">
                  <button>-</button>
                  <span>{options.room}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="searchItem">
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
