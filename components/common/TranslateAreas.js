import React from "react";
import { Col, Row } from "react-bootstrap";

function TranslateAreas({ setJS, JS, pseudo }) {
  return (
    <Row>
      <Col className="p-2">
        <div className="form-floating">
          <textarea
            spellCheck={false}
            className="form-control bg-dark text-light"
            placeholder="Codigo JS"
            style={{ minHeight: "30rem", padding: "2rem" }}
            value={JS}
            onInput={(event) => setJS(event.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea" className=" text-light">
            Lenguaje JS
          </label>
        </div>
      </Col>
      <Col className="p-2">
        <div className="form-floating">
          <textarea
            spellCheck={false}
            className="form-control bg-dark text-light"
            placeholder="Pseudocódigo"
            style={{ minHeight: "30rem", padding: "2rem" }}
            readOnly={true}
            value={pseudo}
          ></textarea>
          <label htmlFor="floatingTextarea" className=" text-light">
            Pseudocódigo
          </label>
        </div>
      </Col>
    </Row>
  );
}

export default TranslateAreas;
