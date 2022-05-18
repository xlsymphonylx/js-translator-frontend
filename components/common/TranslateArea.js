import React from "react";

function TranslateAreas({ setCode, code, placeholder, label }) {
  return (
    <div className="form-floating">
      <textarea
        spellCheck={false}
        className="form-control bg-dark text-light"
        placeholder={placeholder}
        style={{ minHeight: "30rem", padding: "2rem" }}
        value={code}
        onInput={(event) => setCode(event.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea" className=" text-light">
        {label}
      </label>
    </div>
  );
}

export default TranslateAreas;
