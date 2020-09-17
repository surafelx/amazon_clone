import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/1225157-gw_desk_tall-multi_ben-en-songs-1x_1594231150._CB410279486_.png"
          alt="Hero Image"
        />

        <div className="home_row">
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="The lean startup"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
