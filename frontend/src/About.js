import React, { useEffect, useState } from "react";

function About() {
  const [ msg, setMsg ] = useState("");
   
  useEffect(() => {
    fetch(`status`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMsg(data.message);
      });
  },[]);

  return (
    <div>
      <h2>Status</h2>
      <h3>{msg}</h3>
    </div>
  );
}

export default About;
