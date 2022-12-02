import React, { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="display-3">Profile</h1>
      <p>Email: {currentUser.email}</p>
    </div>
  );
};

export default Profile;
