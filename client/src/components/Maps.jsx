import React from "react";

export default function Maps() {
  return (
    <div
      className="position-relative text-align-right"
      style={{ height: "800px", width: "800px" }}
    >
      <div
        className="overflow-hidden background-white!important"
        style={{ height: "800px", width: "800px" }}
      >
        <iframe
          style={{ width: "400px", height: "400px" }}
          src="https://maps.google.com/maps?q=Nairobi%20Haileselasie&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          style={{
            frameborder: "0",
            scrolling: "yes",
            marginheight: "0",
            marginwidth: "0",
          }}
        >
          {" "}
        </iframe>
      </div>
    </div>
  );
}
