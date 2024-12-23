const logOutUser = async () => {
  const response = await fetch("http://localhost:8000/api/v1/users/logout", {
    method: "POST",
    credentials: "include",
  });
  return response;
};
const logInUser = async (params) => {
  const response = await fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response;
};
const logInCheck = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/users/loginCheck",
    {
      method: "GET",
      credentials: "include",
    }
  );
  return response;
};
const getCurrentUser = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/users/get-currentUser",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export { logOutUser, logInUser, logInCheck, getCurrentUser };
