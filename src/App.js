// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import './style'
const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'React.js' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Node.js' },
  ]);
  const [filteredItems, setFilteredItems] = useState(items);
  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <ItemList items={filteredItems} />
    </div>
  );
};
export default App;
