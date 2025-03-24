import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          if (
            window.confirm("Are you sure you want to delete this exercise?")
          ) {
            props.deleteExercise(props.exercise._id);
          }
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
      loading: true, // New state for loading indicator
      error: null, // New state for error messages
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "There was an error fetching the exercises",
          loading: false,
        });
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:4000/exercises/" + id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          exercises: this.state.exercises.filter((el) => el._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "There was an error deleting the exercise" });
      });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return <div>Loading exercises...</div>; // Loading state
    }

    if (error) {
      return <div>{error}</div>; // Error state
    }

    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
