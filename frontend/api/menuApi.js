const API_URL = "http://localhost:5000/api";

export const createMenu = async (menuTitle, description) => {
  const response = await fetch(`${API_URL}/menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: menuTitle, description }),
  });

  return response.json();
};

export const getMenus = async () => {
  const response = await fetch(`${API_URL}/menus`);
  return response.json();
};
