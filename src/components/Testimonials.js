import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideElements = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1686&q=80",
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  ];

  return (
    <div>
      <Typography variant="h4" textAlign="center">
        Check What Our Clients Think About Us
      </Typography>
      <Slider {...settings}>
        {slideElements.map((elem) => {
          return (
            <div>
              <img
                width="400px"
                height="200px"
                style={{ objectFit: "cover" }}
                src={elem}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
