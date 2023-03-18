import {
  ADD_ITEM,
  ADD_USER,
  CHECK_USER,
  DELETE_ITEM,
  DELETE_ITEM_FROM_STATE,
} from "./actionTypes";

export const addItemAction = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

export const decreaseQuantityAction = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const deleteItemFromStateAction = (item) => {
  return {
    type: DELETE_ITEM_FROM_STATE,
    payload: item,
  };
};

export const addUserToStateAction = (users) => {
  return {
    type: ADD_USER,
    payload: users,
  };
};

export const checkTheUseraction=(users)=>{
  return{
    type:CHECK_USER,
    payload:users
  }
}
