const PROFILE_API = "http://localhost:4000/rest/profile";

export const getCurrentProfile = (dispatch) =>
  fetch(PROFILE_API)
    .then((response) => response.json())
    .then((profile) => {
      console.log(profile);
      dispatch({
        type: "fetch-profile",
        payload: profile[0],
      });
    });

export const updateCurrentProfile = (dispatch, profile) =>
  fetch(PROFILE_API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((response) =>
    dispatch({
      type: "edit-profile",
      payload: profile,
    })
  );

export const updateIsEdit = (dispatch, value) =>
  dispatch({
    type: "update-edit-profile",
    payload: value,
  });
