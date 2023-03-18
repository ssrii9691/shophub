import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ITEM_FROM_STATE,
} from "../actions/actionTypes";

const cart = [];
const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        return state.map((y) =>
          y.id === action.payload.id ? { ...y, qty: y.qty + 1 } : y
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }

    case DELETE_ITEM:
      const present1 = state.find((x) => x.id === action.payload.id);
      if (present1.qty > 1) {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      } else if (present1.qty === 1) {
        return state.filter((x) => x.id !== present1.id);
      }
      break;

    case DELETE_ITEM_FROM_STATE:
      const itemPresent = state.find((x) => x.id === action.payload.id);
      if (itemPresent) {
        return state.filter((x) => x.id !== action.payload.id);
      }
      break;
    default:
      return state;
  }
};
export default cartReducer;
