import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
function UsersDetails({Users}) {
    const [user, setUser] = useState([]);
    const { userId } = useParams();
    useEffect(() => {
        fetchUsers();
      }, []);
    
      const fetchUsers = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          const data = await response.json();
          console.log(data);
          setUser(data);
          
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div>
     <p>{user?.name}</p> 
     <p>{user?.username}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <p>{user?.address?.street}</p>
      <p>{user?.address?.suite}</p>
     <p>{user?.address?.city} </p> 
     <p>{user?.address?.zipcode} </p> 
     
    </div>
  )
}

export default UsersDetails
