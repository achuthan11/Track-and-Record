const userInfo = (userName, userEmail, loggedIn) => {
  return {
    type: "UPDATE",
    name: userName,
    email: userEmail,
    loggedIn: loggedIn,
  };
};

export default userInfo;
