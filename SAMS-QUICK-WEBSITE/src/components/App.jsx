import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <Header />
      <CreateArea />
      <Footer />
    </div>
  );
}

export default App;
