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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response;
};
const logInCheck = async () => {
  try {
    const accessKey = localStorage.getItem("accessToken");
    const response = await fetch(
      "http://localhost:8000/api/v1/users/loginCheck",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: accessKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data; // Assuming the response is JSON
  } catch (error) {
    console.error("Error during login check:", error);
    return null; // Return null or handle it as needed
  }
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
