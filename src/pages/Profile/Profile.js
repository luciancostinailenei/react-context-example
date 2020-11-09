import React, { useContext, useState } from "react";

import { UserContext } from "../../contexts";

const Profile = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const [userValue, setUserValue] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "user-change", payload: userValue });
  };

  const handleChange = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <div class="profile">
      <h1>User Profile</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
            value={userValue}
            data-testid="usernameInput"
          />
        </label>

        <input type="submit" value="Update username" />
      </form>
    </div>
  );
};

export default Profile;
