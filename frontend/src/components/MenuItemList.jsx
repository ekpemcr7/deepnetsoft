import React from "react";

const MenuItemList = ({ items }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      {items.length === 0 ? (
        <p className="text-gray-400 text-center">
          No items available in this category.
        </p>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-700"
          >
            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
            <p className="text-lg font-bold">{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MenuItemList;
