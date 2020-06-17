import React from "react";

export default function Maps() {
  return (
    <div
      className="position-relative text-align-right"
      style={{ height: "400px", width: "400px" }}
    >
      <div
        className="overflow-hidden background-none!important"
        style={{ height: "400px", width: "400px" }}
      >
        <iframe
          style={{ width: "400px", height: "400px" }}
          src="https://maps.google.com/maps?q=barcelona%2C%20spain&t=&z=13&ie=UTF8&iwloc=&output=embed"
          sytle={{
            frameborder: "0",
            scrolling: "no",
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
