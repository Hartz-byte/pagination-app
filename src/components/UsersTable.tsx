import React from "react";

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
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#f2f2f2",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <th>JobTitle</th>
            <th>EmailAddress</th>
            <th>FirstNameLastName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={`${user.ID}-${index}`}>
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
