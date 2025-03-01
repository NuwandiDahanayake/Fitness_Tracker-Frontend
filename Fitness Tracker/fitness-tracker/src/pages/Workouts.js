import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Workouts.css";

const Workouts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workoutType: "",
    date: "",
    duration: "",
    reps: "",
    weightUsed: "",
    caloriesBurned: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Workout Logged Successfully! ✅");
    console.log("Workout Data:", formData);
    setFormData({
      workoutType: "",
      date: "",
      duration: "",
      reps: "",
      weightUsed: "",
      caloriesBurned: "",
      notes: "",
    });
  };

  return (
    <div className="workouts-container">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <IoArrowBack className="back-icon" /> Dashboard
      </button>

      <div className="workouts-content">
        {/*Navigation Bar*/}
        <nav className="navbar">
          <h2 className="logo">FitSync</h2>
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">Dashboard | </Link>
            </li>
            <li>
              <Link to="/workouts">Workout | </Link>
            </li>
            <li>
              <Link to="/set-goals">Set Goals | </Link>
            </li>
            <li>
              <Link to="/progress">Track Progress</Link>
            </li>
          </ul>
        </nav>

        <h1>Workout Log</h1>
        <p>Track and log your workout sessions.</p>

        <form className="workout-form" onSubmit={handleSubmit}>
          <label>Workout Type:</label>
          <select
            name="workoutType"
            value={formData.workoutType}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Running">Running</option>
            <option value="Weightlifting">Weightlifting</option>
            <option value="Yoga">Yoga</option>
          </select>

          <label>Date & Time:</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <label>Reps:</label>
          <input
            type="number"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
          />

          <label>Weight Used (kg/lbs):</label>
          <input
            type="number"
            name="weightUsed"
            value={formData.weightUsed}
            onChange={handleChange}
          />

          <label>Calories Burned:</label>
          <input
            type="number"
            name="caloriesBurned"
            value={formData.caloriesBurned}
            onChange={handleChange}
          />

          <label>Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn">
            Log Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Workouts;
