import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./ToDo/TodoItem.js";
import TodoList from "./ToDo/TodoList.js";

const Practice = () => {
    return(
      <>
          <h1>Practice</h1>
           <TodoList/>
           <TodoItem/>
           <ConditionalOutput/>
           <Styles/>
           <Classes/>
          <Link to="/a6/hello">
              Hello
          </Link> |
          <Link to="/a6/twitter/home">
              Build
          </Link>
      </>
    )
};

export default Practice;

