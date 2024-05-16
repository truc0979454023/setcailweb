import React from "react";
import country1 from "../img/destinations-featured-img-8-1.jpg";
import country2 from "../img/destinations-featured-img-9-1.jpg";
import country3 from "../img/destinations-featured-img-10-1.jpg";

const ContentResort = () => {
  return (
    <div className="resort">
      <span className="content-trick">Choose Your</span>
      <h2 className="content-title">Winter Resort</h2>
      <p className="content-des">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor lorem ipsum.
      </p>
      <div className="resort-country">
        <div className="resort-country-item">
          <div className="resort-country-item-img">
            <img src={country1} alt="" />
          </div>
          <h3>Slovenia</h3>
        </div>

        <div className="resort-country-item">
          <div className="resort-country-item-star">
            <span class="material-symbols-outlined">star</span>
          </div>
          <div className="resort-country-item-img">
            <img src={country2} alt="" />
          </div>
          <h3>France</h3>
        </div>

        <div className="resort-country-item">
          <div className="resort-country-item-img">
            <img src={country3} alt="" />
          </div>
          <h3>Switzerland</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentResort;
