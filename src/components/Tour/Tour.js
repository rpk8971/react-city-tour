import React, { useState } from "react";
import "./tour.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Tour(props) {
  const information = false;
  const [showInfo, setInfo] = useState(information);
  const { remove } = props;
  // console.log("prop", props);
  const { id, city, name, img, info } = props.tour;

  const handleInfo = () => setInfo(!showInfo);

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="img" />
        <span className="btn-close" onClick={() => remove(id)}>
          <i className="fa fa-window-close"></i>
        </span>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5>
            info
            <span onClick={handleInfo}>
              {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-caret-down" /> */}
              {/* <i className="fa-sharp fa-solid fa-caret-down"></i */}
              <i className="fa fa-caret-down"></i>
            </span>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </div>
    </article>
  );
}
export default Tour;
