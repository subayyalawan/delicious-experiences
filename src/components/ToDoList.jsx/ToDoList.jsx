import React, { useState } from 'react';
import List from './List';

function ToDoList() {
  const [initialList, setInitialList] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.replace(/\s+/g, " ").trim() === '') {
      setError('Please enter a valid item.');
    } else if (initialList.some((item) => item.text === newItem)) {
      setError(`${newItem} already exists in the initial list.`);
    } else {
      setError('');
      setInitialList([...initialList, { text: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedInitialList = [...initialList];
    const checkedItem = updatedInitialList[index];
    checkedItem.checked = !checkedItem.checked;

    if (checkedItem.checked) {
      setFinalList([...finalList, checkedItem]);
      setInitialList(updatedInitialList.filter((item) => !item.checked));
    } else {
      setInitialList(updatedInitialList);
      setFinalList(finalList.filter((item) => item.text !== checkedItem.text));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter a new item"
      />
      <button onClick={handleAddItem}>Add</button>
      {error && <p className="error">{error}</p>}
      <List title="Initial List" items={initialList} onCheckboxChange={handleCheckboxChange} />
      <List title="Final List" items={finalList} />
    </div>
  );
}

export default ToDoList;
