import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../componenets/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  const pixels = "1px";

  function renderUsers() {
    return users.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id}>
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ));
  }

  function renderSkeletonLoading() {
    return <h1>Loading...</h1>;
  }

  return <div>{users.length ? renderUsers() : renderSkeletonLoading()};</div>;
}

export default Home;
