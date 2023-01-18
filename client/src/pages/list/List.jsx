import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header page="list" />

      <main>
        <div className="wrapper">
          <section className="search">
            <h1>Search</h1>
            <form></form>
          </section>
          <section className="result"></section>
        </div>
      </main>
    </div>
  );
};

export default List;
