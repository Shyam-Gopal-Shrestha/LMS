import axios from "axios";

const USER_API_URL = "http://localhost:8000/api/user";

// public Routes | Public Endpoint
// create user | Signup
export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

// Login user
export const loginUser = (userObj) => {
  const response = axios
    .post(`${USER_API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// private Routes | Private Endpoints
