import React from "react";

// interface
interface User {
  ID: Number;
  JobTitle: String;
  EmailAddress: String;
  FirstNameLastName: String;
  Email: String;
  Phone: String;
  Company: String;
}

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {/* users table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#e0e0e0",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <th>Job Title</th>
            <th>Email Address</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping and rendering each element */}
          {users.map((user, index) => (
            <tr
              key={`${user.ID}-${index}`}
              style={{ backgroundColor: index % 2 == 1 ? "#f7f7f7" : "#fff" }}
            >
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.JobTitle}
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.EmailAddress}
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.FirstNameLastName}
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.Email}
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.Phone}
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                {user.Company}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
