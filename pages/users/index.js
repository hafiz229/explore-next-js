import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  return (
    <div>
      <h1>Total {users.length} Users</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}{" "}
          <Link href={`users/${user.id}`}>
            <a>Details</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
