const initial_info = {
  name: "no_name",
  email: "no_email",
  loggedIn: false,
};

const userUpdate = (info = initial_info, action) => {
  switch (action.type) {
    case "UPDATE":
      info = {
        name: action.name,
        email: action.email,
        loggedIn: action.loggedIn,
      };
      return info;
    default:
      return info;
  }
};

export default userUpdate;
