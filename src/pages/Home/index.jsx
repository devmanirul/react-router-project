import React from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* card container */}
      <div className="container grid col-span-12 mx-auto my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
