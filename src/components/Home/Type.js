import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Une Elève en ingénierie informatique et technologies émergentes à l'ENSAJ",
        ],
        autoStart: true,
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
