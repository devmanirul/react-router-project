import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {/* card container */}
      <div className="container grid grid-cols-12 gap-10 mx-auto my-10">
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
