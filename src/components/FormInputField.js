import React from "react";

export default ({ name, input, label, meta: { error, touched }, type, placeholder }) => {
  return (
    <div className="form-group">
      <fieldset className="form-group__fieldset">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          placeholder={placeholder}
          {...input}
          type={type}
          style={{ marginBottom: "5px" }}
          className="form-group__input"
        />
      </fieldset>
      <div className="error red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
