import React, { Component } from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

export const buildStars = rateStars => {
  let stars = [];
  if (!rateStars) {
    for (let index = 0; index < 5; index++) {
      stars.push(
        <span key={index}>
          <MdStarBorder />
        </span>
      );
    }
    return (
      <div>
        {stars}
        <span className="text-muted h6 mb-0">&nbsp;No&nbsp;rating</span>
      </div>
    );
  }
  let i = 0;
  for (i = 0; i < Math.floor(rateStars); i++) {
    stars.push(
      <span key={i}>
        <MdStar />
      </span>
    );
  }
  if (!Number.isInteger(rateStars))
    stars.push(
      <span key={i}>
        <MdStarHalf />
      </span>
    );
  return stars;
};
