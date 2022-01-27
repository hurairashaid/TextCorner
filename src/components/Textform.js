import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here");
  function handlerToUpperCase() {
    setText(text.toUpperCase());
    props.showalert("change to upper case", "success");
  }
  function newText(event) {
    setText(event.target.value);
  }
  function handlerToLowerCase() {
    setText(text.toLowerCase());
    props.showalert("change to Lower case", "success");
  }
  function handlerToCapitalLetter() {
    var get = text.toLowercase().split("");
    for (let i = 0; i < get.length; i++) {
      if (i == 0 || get[i - 1] == " ") {
        get[i] = get[i].toUpperCase();
      }
    }
    setText(get.join(""));
    props.showalert("change to First letter capital", "success");
  }
  return (
    <>
      <div className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h1>{props.heading}</h1>
        <div
          className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            value={text}
            onChange={newText}
            id="myBox"
            rows="8"
          ></textarea>
          <div className="my-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlerToUpperCase}
            >
              Convert To UpperCase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={handlerToLowerCase}
            >
              Convert To LowerCase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={handlerToCapitalLetter}
            >
              Convert To capital letter
            </button>
          </div>
        </div>
      </div>
      <div className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.split("").length}{" "}
          character
        </p>
      </div>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2>Previews</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
