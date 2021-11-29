import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./ToDo/TodoItem.js";
import TodoList from "./ToDo/TodoList.js";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const Practice9 = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a9/twitter/home">Build</Link>
      <Movies />
    </>
  );
};

export default Practice9;
