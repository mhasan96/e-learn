import React from "react";
import img from "../../images/not.png";
const NotFound = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{ marginBottom: "52px", marginTop: "50px", width: "600px" }}
        src={img}
        alt=""
      />
    </div>
  );
};

export default NotFound;
