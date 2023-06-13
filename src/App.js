import './App.css';
import UsersList from './pages/UsersList';
import UsersDetails from './pages/UsersDetails';
import FavouriteItems from './pages/FavouriteItems';
import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
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
    <div className="App">
      <BrowserRouter>
  <Routes>
  <Route path="/" element={<UsersList users={users} />} />
  <Route path="/:userId" element={<UsersDetails/>} />
  <Route path="/favouritesItem" element={<FavouriteItems/>} />
</Routes>
</BrowserRouter>

  
    </div>
  );
}

export default App;
