const userInfo = (userName, userEmail, loggedIn) => {
  const userData = {
    name: userName,
    email: userEmail,
    loggedIn: loggedIn,
  };
  return {
    type: "UPDATE",
    userData,
  };
};

export default userInfo;
