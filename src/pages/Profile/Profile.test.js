import React from "react";

import { render } from "@testing-library/react";

import Profile from "./Profile";

import { UserProvider } from "../../contexts/UserContext";

describe("Profile Component", () => {
  it("should reflect the initial state of UserContext", () => {
    // mock axios once and return fake data for async call that happens inside useEffect

    const { getByTestId, rerender } = render(
      <DataProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </DataProvider>
    );

    // wait for axios to be called

    // dispatch will be called behind inside useEffect after mock has been returned

    // rerendering happening - either I need to rerender or testing library will do that automatically

    expect(getByTestId("usernameInput").value).toEqual("Alex");
  });
});
