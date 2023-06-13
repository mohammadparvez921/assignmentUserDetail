import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const UsersList = ({users}) => {
//   const [userdetail, setUserdetail] = useState([]);

 
  
//   const userDetails = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//       const data = await response.json();
//       setUserdetail(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };


//     useEffect(userDetails(id),[])

  
 
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (

          <li key={user.id} >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
