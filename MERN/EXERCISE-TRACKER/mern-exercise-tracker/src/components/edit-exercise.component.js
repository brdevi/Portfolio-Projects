import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from "react-router-dom";

const EditExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(""); // Error state

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the exercise data
    axios
      .get("http://localhost:4000/exercises/" + id)
      .then((response) => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch((error) => {
        setError("Error fetching exercise data. Please try again.");
      });

    // Fetch the users list
    axios
      .get("http://localhost:4000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
        }
      })
      .catch((error) => {
        setError("Error fetching users list. Please try again.");
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!description || !duration || !username) {
      setError("Please fill in all fields");
      return;
    }

    const exercise = { username, description, duration, date };

    // Send updated exercise data to the backend
    axios
      .post("http://localhost:4000/exercises/update/" + id, exercise)
      .then((res) => {
        console.log(res.data);
        navigate("/"); // Redirect to homepage after submission
      })
      .catch((error) => {
        setError("Error updating exercise. Please try again.");
      });
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Error message display */}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
