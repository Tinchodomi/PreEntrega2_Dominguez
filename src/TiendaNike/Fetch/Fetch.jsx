import React, { useEffect, useState } from "react";
import "./Fetch.css";

const Fetch = () => {
  const [usuarios, setaUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setaUsuarios(data))
      .catch((error) => console.error(error));
  }, [usuarios]);

  return (
    <div className="fetch_container">
      <h2>Nike players</h2>
      <br />
      {usuarios.map((usuario, index) => {
        return (
          <div key={index}>
            <p>name:{usuario.name}</p>
            <p>email:{usuario.email}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
