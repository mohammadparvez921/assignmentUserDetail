import React from 'react'
import { useEffect,useState } from 'react';
function FavouriteItems() {
    const [localStorageData, setLocalStorageData] = useState([]);

    useEffect(() => {
      const storedData = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        storedData.push({ key, value });
      }
      setLocalStorageData(storedData);
    }, []);
    
    return (
      <div>
        <h2>Favorites:</h2>
        <ul>
          {localStorageData.map(item => (
        
        <li key={item.key}>
        <strong>{item.key}: </strong>
        {item.value}
        </li>
            
          ))}
        </ul>
      </div>
    );
}

export default FavouriteItems

