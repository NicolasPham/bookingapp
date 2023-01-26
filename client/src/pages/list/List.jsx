import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import Post from "../../components/post/Post";

import "./list.scss";

//------- Date picker ---------//
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const List = () => {
  //--------------------------------------------//
  const location = useLocation();

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState({
    minPrice: 50,
    maxPrice: 1000,
    adult: location.state.options.adult,
    children: location.state.options.children,
    room: location.state.options.room,
  });
  console.log(location);
  console.log(options);

  //--------------------------------------------//
  return (
    <div className="list">
      <Navbar />
      <Header page="list" />

      <main>
        <div className="wrapper">
          <section className="relative search">
            <h1>Search</h1>

            {/* ----------Date picker-------- */}
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute calendar"
              />
            )}

            {/* ---------- / Date picker-------- */}

            <form className="flex-column form">
              <div className="item">
                <label htmlFor="destination">Destination</label>
                <input type="text" defaultValue={location.state.destination} />
              </div>

              <div className="item">
                <label htmlFor="checkinDate">Check-in Date</label>
                <span
                  className="date"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
              </div>

              <div className="flex-column options">
                <span className="title">Options</span>

                <div className="option">
                  <label htmlFor="minprice">Min price (per night)</label>
                  <input
                    type="number"
                    id="minprice"
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        minPrice: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="option">
                  <label htmlFor="maxprice">Max price (per night)</label>
                  <input
                    type="number"
                    id="maxprice"
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        maxPrice: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="option">
                  <label htmlFor="adult">Adult</label>
                  <input
                    type="number"
                    id="adult"
                    value={options.adult}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        adult: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="option">
                  <label htmlFor="children">Children</label>
                  <input
                    type="number"
                    id="children"
                    value={options.children}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        children: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="option">
                  <label htmlFor="room">Room</label>
                  <input
                    type="number"
                    id="room"
                    value={options.room}
                    onChange={(e) =>
                      setOptions({ ...options, room: parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>

              <button>Search</button>
            </form>
          </section>

          <section className="result">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </section>
        </div>
      </main>
    </div>
  );
};

export default List;
