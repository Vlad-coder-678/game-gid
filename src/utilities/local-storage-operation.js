const setItemToLocalStorage = ({ itemName, itemData }) => {
  window.localStorage.setItem(itemName, JSON.stringify(itemData));
};

const getItemFromLocalStorage = ({ itemName, itemData }) => {
  window.localStorage.setItem(itemName, JSON.stringify(itemData));
};

export {
  getItemFromLocalStorage,
  setItemToLocalStorage,
};
