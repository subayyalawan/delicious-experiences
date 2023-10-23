import React, { useState } from "react";
import List from "./List";

function ToDoList() {
  const [initialList, setInitialList] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.replace(/\s+/g, " ").trim() === "") {
      setError("Please enter a valid item.");
    } else if (initialList.some((item) => item.text === newItem)) {
      setError(`${newItem} already exists in the initial list.`);
    } else {
      setError("");
      setInitialList([...initialList, { text: newItem, checked: false }]);
      setNewItem("");
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedInitialList = [...initialList];
    const checkedItem = updatedInitialList[index];
    checkedItem.checked = !checkedItem.checked;

    if (checkedItem.checked) {
      const itemIndex = finalList.findIndex(
        (item) => item.text === checkedItem.text
      );
      if (itemIndex === -1) {
        // Only add the item to the final list if it's not already there.
        setFinalList([...finalList, { text: checkedItem.text, checked: true }]);
      }
    } else {
      setFinalList(finalList.filter((item) => item.text !== checkedItem.text));
    }
    setInitialList(updatedInitialList);
  };

  return (
    <div className=" container mx-auto my-20">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex justify-between md:flex-row flex-col items-center bg-contact-yellow md:p-8 p-4">
          <div className="list-left w-full md:w-1/2 mb-1">
            <h1 className="font-Freight-bold text-2xl capitalize">Todo List</h1>
            <p className="font-Freight-medium text-sm">
              Enter New Item Into Your To-Do-List!
            </p>
          </div>
          <div className="list-right bg-white md:w-1/2 w-full flex justify-between items-center rounded-lg py-1 pr-1">
            <input
              className="bg-white w-10/12 py-3 px-2 font-Freight-bold focus:outline-none text-xs"
              type="text"
              value={newItem}
              onChange={handleInputChange}
              placeholder="Enter A New item"
            />
            <button
              onClick={handleAddItem}
              className="bg-black cursor-pointer text-white py-3 px-6 focus:outline-none text-xs rounded uppercase font-semibold"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-8 bg-contact-yellow md:p-8 p-4">
          {error && (
            <p className="error font-Freight-bold text-red-700 text-base capitalize">
              {error}
            </p>
          )}
          <List
            title="Initial List"
            items={initialList}
            onCheckboxChange={handleCheckboxChange}
          />
          <List title="Final List" items={finalList} />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
