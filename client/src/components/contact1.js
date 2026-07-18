import React, { useState } from "react";
import "./Contact1.css"; // Importing the CSS file

function Contact1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form-container">
      <div className="form">
        <h1>Contact Form</h1>
        {successMessage()}
        {errorMessage()}
        <form>
          <table>
            <tbody>
              <tr>
                <th>
                  <label className="label">Contact Name</label>
                </th>
                <td>
                  <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                    placeholder="Contact Name"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label className="label">Email</label>
                </th>
                <td>
                  <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                    placeholder="Email Id"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label className="label">Subject</label>
                </th>
                <td>
                  <input
                    className="input"
                    value={subject}
                    type="text"
                    placeholder="Subject"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label className="label">Message</label>
                </th>
                <td>
                  <textarea
                    rows={5}
                    cols={30}
                    value={message}
                    placeholder="Your message here..."
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <center>
                    <button onClick={handleSubmit} type="submit">
                      Submit
                    </button>
                  </center>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Contact1;
