const PROFILE_API = "https://node-on-heroku-3.herokuapp.com/api/profile";

export const getCurrentProfile = (dispatch) =>
  fetch(PROFILE_API)
    .then((response) => response.json())
    .then((profile) =>
      dispatch({
        type: "fetch-profile",
        profile,
      })
    );

export const updateCurrentProfile = (dispatch, profile) =>
  fetch(PROFILE_API, {
    method: "PUT",
  }).then((response) =>
    dispatch({
      type: "edit-profile",
      profile,
    })
  );
