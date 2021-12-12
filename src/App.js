import "./styles.css";
import { useState } from "react";
import data from "./data";
import Questions from "./question";
export default function App() {
  // console.log(data);
  return (
    <div className="App">
      <h1>Question and Answers About Login</h1>
      <section>
        <Questions data={data} />
      </section>
    </div>
  );
}
