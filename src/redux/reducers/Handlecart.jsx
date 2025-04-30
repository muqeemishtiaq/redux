const initialState = [];

const HandleCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const exist = state.find((product) => product.id === action.payload.id);
      if (exist) {
        return state.map((product) =>
          product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    case "ADD_QTY":
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product
      );
    case "DEL_QTY":
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product
      );
    case "ADD_TO_CART":
      return [...state, { ...action.payload, qty: 1 }];
    case "DEL_ITEM":
     
      if (product.id === 1) {
        return state.filter((product) => product.id !== action.payload.id);
      }
      else {
        return state.map((product) =>
          product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product
        );
      }
    default:
      return state;
  }
};
export default HandleCart;
export { HandleCart };