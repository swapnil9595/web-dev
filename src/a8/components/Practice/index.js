import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./ToDo/TodoItem.js";
import TodoList from "./ToDo/TodoList.js";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";

const Practice8 = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a6/hello">Hello</Link> |
      <Link to="/a8/twitter/home">Build</Link>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <APIExamples />
      <ReduxExamples />
    </>
  );
};

export default Practice8;
