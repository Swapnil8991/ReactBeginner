import React from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const courseGoals = [
    {id:'cg1', text:"Finish the course"}, 
    {id:'cg2', text:"Solve all the hands on"}, 
    {id:'cg3', text:"Get double salary"}];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals ={courseGoals}></GoalList>
    </div>
  );
};

export default App;
