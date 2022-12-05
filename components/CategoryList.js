import React from "react";
import Slider from "react-slick";

const CategoryList = () => {
  return (
    <>
      <div className="container">
        <Slider dots={true} slidesToShow={4} slidesToScroll={4}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CategoryList;
