import React from "react";

import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Roboto Condensed",
        }}
      >
        User Pagination
      </h1>

      {/* userlist component */}
      <UserList />
    </div>
  );
};

export default App;
