import React from "react";

function TranslateArea({
  setCode,
  debounce,
  code,
  placeholder,
  label,
  disabled,
}) {
  return (
    <div className="form-floating">
      <textarea
        spellCheck={false}
        className="form-control bg-dark text-light"
        onChange={debounce}
        readOnly={disabled}
        placeholder={placeholder}
        style={{ minHeight: "30rem", padding: "2rem" }}
        value={code}
        onInput={(event) => (setCode ? setCode(event.target.value) : null)}
      ></textarea>
      <label htmlFor="floatingTextarea" className=" text-light">
        {label}
      </label>
    </div>
  );
}

export default TranslateArea;
