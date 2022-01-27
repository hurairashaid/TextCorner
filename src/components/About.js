import { useState } from "react";

export default function About() {
  const [styleVersion, newStyle] = useState({
    border: "0.2px solid #1c1d1f",
    backgroundColor: "white",
    color: "1c1d1f"
  });
  let [btnmode, newbtnmode] = useState("Dark");
  function toggleStyle() {
    if (styleVersion.color === "white") {
      newStyle({
        border: "0.5px solid #1c1d1f",
        backgroundColor: "white",
        color: "#1c1d1f"
      });
      newbtnmode("Dark");
    } else {
      newStyle({
        border: "0.5px solid white",
        backgroundColor: "#1c1d1f",
        color: "white"
      });
      newbtnmode("Light");
    }
  }
  return (
    <div className="container my-3" style={styleVersion}>
      <h1 className="my-3">About Our Company</h1>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={styleVersion}
      >
        <div className="accordion-item" style={styleVersion}>
          <h2
            className="accordion-header"
            id="flush-headingOne"
            style={styleVersion}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={styleVersion}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={styleVersion}
          >
            <div className="accordion-body" style={styleVersion}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styleVersion}>
          <h2
            className="accordion-header"
            id="flush-headingTwo"
            style={styleVersion}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={styleVersion}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={styleVersion}
          >
            <div className="accordion-body" style={styleVersion}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styleVersion}>
          <h2
            className="accordion-header"
            id="flush-headingThree"
            style={styleVersion}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={styleVersion}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={styleVersion}
          >
            <div className="accordion-body" style={styleVersion}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary my-3" onClick={toggleStyle}>
        connvet to {btnmode} mode
      </button>
    </div>
  );
}
