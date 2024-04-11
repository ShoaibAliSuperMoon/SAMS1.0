import React, { useState } from "react";
import img1 from "../assets/Ev1.jpg";

const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <div>
      <p>Events</p>
      <img src={img1} alt="loading" width="500px" height="200px" />
      <p>Content</p>
      <p>Content</p>
    </div>
  );
};

export default CreateArea;
