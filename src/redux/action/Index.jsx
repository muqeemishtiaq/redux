
export const addCart = (products) => {
  return {
    type: "ADD_ITEM",
    payload: products,
  };
};
export const delCart = (products) => {
  return {
    type: "DEL_ITEM",
    payload: products,
  };
};

