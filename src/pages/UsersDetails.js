import React from 'react'
import { useState,useEffect } from 'react';
function UsersDetails() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
      }, []);
    
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          const sortedUsers = data.sort((a, b) => a.name.localeCompare(b.name));
          setUsers(sortedUsers);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div>
      User details
    </div>
  )
}

export default UsersDetails
