import React from "react";
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
  


  //--------------------------------------------//
  return (
    <div class="list">
      <Navbar />
      <Header page="list" />

      <main>
        <div className="wrapper">
          <section className="search">
            <h1>Search</h1>
            <form className="flex-column form">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder="Ex: Toronto, etc" />

              <label htmlFor="checkinDate">Check-in Date</label>
              <span className="date">date to date</span>
              <div className="flex-column options">
                <span className="title">Options</span>

                <div className="option">
                <label htmlFor="minprice">Min price (per night)</label>
                <input type="text" id="minprice" />
                </div>
                <div className="option">
                <label htmlFor="maxprice">Max price (per night)</label>
                <input type="text" id="maxprice" />
                </div>
                <div className="option">
                <label htmlFor="adult">Adult</label>
                <input type="text" id="adult" />
                </div>
                <div className="option">
                <label htmlFor="children">Children</label>
                <input type="text" id="children" />
                </div>
                <div className="option">
                <label htmlFor="room">Room</label>
                <input type="text" id="room" />
                </div>
              </div>


              <button>Search</button>
            </form>
          </section>


          <section className="result">
            <Post/>

          </section>

        </div>
      </main>
    </div>
  );
};

export default List;
