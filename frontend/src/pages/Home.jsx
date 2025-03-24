import React, { useState } from "react";
import MenuTabs from "../components/MenuTabs";
import MenuItemList from "../components/MenuItemList";
import { FaPlus, FaCheck } from "react-icons/fa";

const Home = () => {
  const [menus, setMenus] = useState([
    {
      _id: "1",
      name: "Food",
      description: "Delicious food options",
      items: [],
    },
    {
      _id: "2",
      name: "Drinks",
      description: "Refreshing drinks",
      items: [],
    },
    {
      _id: "3",
      name: "Brunch",
      description: "Morning brunch specials",
      items: [],
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState(menus[0]._id);
  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [newMenu, setNewMenu] = useState({
    name: "",
    description: "",
  });

  const [isAddingMenu, setIsAddingMenu] = useState(false);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [menuAdded, setMenuAdded] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  const handleAddMenuItem = () => {
    const updatedMenus = menus.map((menu) =>
      menu._id === selectedMenu
        ? {
            ...menu,
            items: [...menu.items, { ...newMenuItem }],
          }
        : menu
    );
    setMenus(updatedMenus);
    setNewMenuItem({ name: "", description: "", price: "" });
    setItemAdded(true);
    setTimeout(() => setItemAdded(false), 2000);
  };

  const handleAddMenu = () => {
    const newMenuData = {
      _id: String(menus.length + 1),
      name: newMenu.name || "New Menu",
      description: newMenu.description || "Description for the new menu",
      items: [],
    };
    setMenus([...menus, newMenuData]);
    setNewMenu({ name: "", description: "" });
    setMenuAdded(true);
    setTimeout(() => setMenuAdded(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-full w-full">
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Header Section */}
        <div className="text-center my-10">
          <h1 className="text-5xl font-bold">MENU</h1>
          <p className="text-gray-300 mt-2">
            Please take a look at our menu featuring food, drinks, and brunch.
          </p>
        </div>

        <MenuTabs
          menus={menus}
          selectedMenu={selectedMenu}
          onMenuSelect={setSelectedMenu}
        />

        {/* Menu Section */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-center w-full">
            <h2 className="text-3xl font-bold uppercase">
              {menus.find((menu) => menu._id === selectedMenu)?.name}
            </h2>
            <MenuItemList
              items={menus.find((menu) => menu._id === selectedMenu)?.items}
            />
          </div>

          <button
            onClick={() => setIsAddingMenu(!isAddingMenu)}
            className="text-2xl text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <FaPlus />
          </button>
        </div>

        {isAddingMenu && (
          <div className="flex justify-center mt-4 gap-4">
            <input
              type="text"
              placeholder="Menu Name"
              value={newMenu.name}
              onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
              className="p-2 bg-gray-700 text-white rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Description"
              value={newMenu.description}
              onChange={(e) =>
                setNewMenu({ ...newMenu, description: e.target.value })
              }
              className="p-2 bg-gray-700 text-white rounded w-1/3"
            />
            <button
              onClick={handleAddMenu}
              className="text-2xl text-white bg-green-500 hover:bg-green-600 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <FaCheck />
            </button>
          </div>
        )}

        {menuAdded && (
          <div className="text-green-500 mt-2 text-center">
            <FaCheck size={24} />
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setIsAddingItem(!isAddingItem)}
            className="text-2xl text-white bg-green-500 hover:bg-green-600 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <FaPlus />
          </button>
        </div>

        {isAddingItem && (
          <div className="flex justify-center mt-4 gap-4">
            <input
              type="text"
              placeholder="Item Name"
              value={newMenuItem.name}
              onChange={(e) =>
                setNewMenuItem({ ...newMenuItem, name: e.target.value })
              }
              className="p-2 bg-gray-700 text-white rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Description"
              value={newMenuItem.description}
              onChange={(e) =>
                setNewMenuItem({ ...newMenuItem, description: e.target.value })
              }
              className="p-2 bg-gray-700 text-white rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Price"
              value={newMenuItem.price}
              onChange={(e) =>
                setNewMenuItem({ ...newMenuItem, price: e.target.value })
              }
              className="p-2 bg-gray-700 text-white rounded w-1/3"
            />
            <button
              onClick={handleAddMenuItem}
              className="text-2xl text-white bg-green-500 hover:bg-green-600 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <FaCheck />
            </button>
          </div>
        )}

        {itemAdded && (
          <div className="text-green-500 mt-2 text-center">
            <FaCheck size={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
