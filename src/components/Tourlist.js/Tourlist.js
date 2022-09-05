import React, { useState } from "react";
import "./tourList.scss";
import Tour from "../Tour/Tour.js";
import { tourData } from "../tourData.js";

const Tourlist = () => {
  const [tourdata, setTourdata] = useState(tourData);
  // console.log(tourdata);
  const removeTour = (id) => {
    console.log("new", tourdata);
    const newTourdata = tourdata.filter((tour) => tour.id !== id);
    const newData = [];
    for (const el of newTourdata) {
      newData.push(el);
    }
    setTourdata(newData);
  };
  return (
    <section className="tourlist">
      {tourdata.map((tour) => {
        return <Tour key={tour.id} tour={tour} remove={removeTour} />;
      })}
    </section>
  );
};
export default Tourlist;
