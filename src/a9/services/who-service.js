const URL = "http://localhost:4000/rest/who";

export const findAllWho = (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((who) => dispatch({ type: "fetch-who", who }));
};
