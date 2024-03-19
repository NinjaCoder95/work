import { useEffect, useState } from 'react';
// import './App.css';


function App() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');

  const handleDisplay = (inputName, inputPlace) => {
    setName(inputName);
    setPlace(inputPlace);
  };

  const handleClear = () => {
    setName('');
    setPlace('');
  };

  return (
    <div>
      <label>Name: {name}</label><br />
      <label>Place: {place}</label><br />
      <button onClick={handleClear}>Clear</button>
      <FormComponent onDisplay={handleDisplay} />
    </div>
  );
};

const FormComponent = ({ onDisplay }) => {
  const [inputName, setInputName] = useState('');
  const [inputPlace, setInputPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDisplay(inputName, inputPlace);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Name"
      /><br />
      <input
        type="text"
        value={inputPlace}
        onChange={(e) => setInputPlace(e.target.value)}
        placeholder="Place"
      /><br />
      <button type="submit">Display</button>
    </form>
  );
}

export default App;
