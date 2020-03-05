import { ADD, SUB } from "./actions.js";

// 初始值
const initialState = {
  num1: 10,
  num2: 20,
  num3: 30
}

// reducer：创建store使用
export function numReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case ADD:
      newState[action.pname]++
      return newState
    case SUB:
      newState[action.pname]--
      return newState
    default:
      return state
  }
}