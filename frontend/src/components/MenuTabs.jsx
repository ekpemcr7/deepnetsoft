import React from "react";

const MenuTabs = ({ menus, selectedMenu, onMenuSelect }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {menus.map((menu) => (
        <button
          key={menu._id}
          className={`px-6 py-2 rounded ${
            selectedMenu === menu._id
              ? "bg-blue-500"
              : "bg-gray-800 hover:bg-blue-500 transition"
          }`}
          onClick={() => onMenuSelect(menu._id)}
        >
          {menu.name}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
