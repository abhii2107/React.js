import React from "react";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";

const NetflixSeries = () => {
  return (
    <ul className="series-list series-cardgrid grid-three--cols">
      {seriesData.map((currelem) => {
        return <SeriesCard key={currelem.id} data={currelem} />;
      })}
    </ul>
  );
};

export default NetflixSeries;

// export const Footer = () => {
//   return <p>@ copyright All right reserved </p>;
// };
