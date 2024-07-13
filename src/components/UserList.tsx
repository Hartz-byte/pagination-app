import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import UsersTable from "./UsersTable";

interface User {
  ID: Number;
  JobTitle: String;
  EmailAddress: String;
  FirstNameLastName: String;
  Email: String;
  Phone: String;
  Company: String;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 10;

  // api fetch using axios
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://give-me-users-forever.vercel.app/api/users/${currentPage}/next`
        );

        setUsers(response.data.users);
        console.log(users);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Loading users...
          </p>
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>
            Error: {error}
          </p>
        </div>
      ) : (
        <>
          <UsersTable users={users} />

          <ResponsivePagination
            current={currentPage}
            total={pageSize}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default UserList;
