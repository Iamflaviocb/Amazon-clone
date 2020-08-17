export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET USER":
      return { ...state, user: action.user };

    case "ADD TO BASKET":
      // Logic for adding item to the basket

      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE FROM BASKET":
      // Clone the basket
      let newBasket = [...state.basket];

      // Check if he item exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product id:${action.id}as its not the basket`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
