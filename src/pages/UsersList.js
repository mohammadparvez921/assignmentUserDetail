import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const UsersList = ({users}) => {
    const [items, setItems] = useState([]);

    //  to add item
    const addItem = (item) => {
        if(!items.includes(item)){
        const updatedItems = [...items, item];
        
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        }
      };
    // to remove item

    const removeItem = (item) => {
        const updatedItems = items.filter((i) => i !== item);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
      };
    
   

  return (
    <div>
      <h2>User List</h2> 
      <Link to="/favouritesItem" ><button>Favourite itmes</button></Link>
      <ul>
        {users.map((user) => (
         
          <li key={user.id} >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
           <Link to={`/${user.id}`} ><button>About User</button></Link>  <button onClick={() => addItem(user)}>Add to favorites</button> <button  onClick={() => removeItem(user)}>Remove from favorites</button>
          </li>
         
        ))}
      </ul>
      
    </div>
  );
};

export default UsersList;
