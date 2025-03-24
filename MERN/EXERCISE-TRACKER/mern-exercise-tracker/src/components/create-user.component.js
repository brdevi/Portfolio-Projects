import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation

const CreateUser = () => {
  const [username, setUsername] = useState(""); // manage the username state
  const navigate = useNavigate(); // to navigate after submitting the form

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);

    // Make the POST request to add the new user
    axios
      .post("http://localhost:4000/users/add", user)
      .then((res) => {
        console.log(res.data);
        navigate("/"); // Redirect to home page after creating the user
      })
      .catch((error) => {
        console.log(error);
      });

    // Clear the input field after submission
    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // update username on change
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
