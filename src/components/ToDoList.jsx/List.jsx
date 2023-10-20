import React from 'react';

function List({ title, items, onCheckboxChange }) {
  return (
    <div>
      <h2 className='text-3xl text-footer-text-grey font-Freight-semibold'>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {onCheckboxChange && (
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onCheckboxChange(index)}
              />
            )}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
