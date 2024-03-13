import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiState, setApiState] = useState([]);
  const [searchType, setSearchType] = useState('firstName');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const response = await fetch('https://jsonplaceholder.org/users');
    const responseValue = await response.json();
    setApiState(responseValue);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = apiState.filter(person => {
    if (searchType === 'firstName') {
      return person.firstname.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return person.lastname.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <div className="App">
      <h1>api</h1>
      <select value={searchType} onChange={e => setSearchType(e.target.value)}>
        <option value="firstname">First Name</option>
        <option value="lastname">Last Name</option>
      </select>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
      <ul>
        {filteredUsers.map(person => (
          <li key={person.id}>
            {person.firstname} {person.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
