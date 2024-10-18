import React, { useEffect, useState } from "react";
import api from "./config/api";

function About() {
  const [ msg, setMsg ] = useState("");
   
  useEffect(() => {
    // fetch(`api/status`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setMsg(data.message);
    //   });
    api.post("status")
  },[]);

  return (
    <div>
      <h2>Status</h2>
      <h3>{msg}</h3>
    </div>
  );
}

export default About;
