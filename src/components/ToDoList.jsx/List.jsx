import React from "react";

function List({ title, items, onCheckboxChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-Freight-semibold mb-1">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {onCheckboxChange && (
              <input
                className="mr-2 accent-orange-700"
                type="checkbox"
                checked={item.checked}
                onChange={() => onCheckboxChange(index)}
              />
            )}
            <span className="font-Freight-book text-footer-text-grey text-lg">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
