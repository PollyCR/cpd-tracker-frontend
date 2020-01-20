const BASE_URL = "http://localhost:3000/api/v1";
const LOGIN_URL = `${BASE_URL}/login`;
const VALIDATE_URL = `${BASE_URL}/validate`;
const SIGNUP_URL = `${BASE_URL}/signup`;
const LOGOUT_URL = `${BASE_URL}/logout`;

const jsonHeaders = (more = {}) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": 'http://localhost:3001',
  ...more
});

const handleServerResponse = res => {
  if (res.ok) {
    return res.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return { staticPageContent: text };
      }
    });
  } else if (res.status === 503) {
    return { code: 503 };
  } else if (res.status === 500) {
    return { code: 500 };
  } else {
    return res.text().then(text => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return res;
      }
    });
  }
};

const validateUser = () =>
  fetch(VALIDATE_URL, {
    method: "POST",
    headers: jsonHeaders(),
    credentials: "include"
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (!userDetails) {
        return { errors: ["There was an error"] };
      }
      return userDetails.user || userDetails;
    })
    .catch(handleError);

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: "POST",
    credentials: "include",
    headers: jsonHeaders(),
    body: JSON.stringify({ user: userDetails })
  })
    .then(handleServerResponse)
    .then(userDetails => {
      return userDetails.user || userDetails;
    })
    .catch(handleError);

const signup = userDetails =>
  fetch(SIGNUP_URL, {
    method: "POST",
    credentials: "include",
    headers: jsonHeaders(),
    body: JSON.stringify({ user: userDetails })
  })
    .then(handleServerResponse)
    .then(userDetails => {
      return userDetails.user || userDetails;
    })
    .catch(handleError);

const handleError = () => {
  console.error("Error in fetch request");
};

const logout = () =>
  fetch(LOGOUT_URL, {
    method: "DELETE",
    credentials: "include"
  })
    .then(handleServerResponse)
    .catch(handleError);

export default {
  BASE_URL,
  LOGIN_URL,
  VALIDATE_URL,
  validateUser,
  signup,
  login,
  logout
};
