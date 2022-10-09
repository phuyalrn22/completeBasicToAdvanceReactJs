import React, { useState } from "react";

const validator = (formData) => {
  if (!formData.email.value.includes("@")) {
    formData.email.error = "Email address is not valid";
  }
  return formData;
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const submitHandeler = (e) => {
    e.preventDefault();
    const newFormData = validator(formData);
    setFormData({ ...newFormData });
  };

  return (
    <form onSubmit={submitHandeler}>
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", padding: "10px" }}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={formData.email.value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: { value: e.target.value },
                  });
                }}
              />
            </div>
            {formData.email.error && (
              <span className="text-danger">{formData.email.error}</span>
            )}
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: { value: e.target.value },
                  });
                }}
                value={formData.password.value}
                type="password"
                className="form-control"
              />
            </div>
            {/* <span className="text-danger">password is not valid</span> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
