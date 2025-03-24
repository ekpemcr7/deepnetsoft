// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const createItem = async (itemData) => {
  try {
    const response = await fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

export const getItemsByMenu = async (menuId) => {
  try {
    const response = await fetch(`${API_URL}/items/${menuId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
