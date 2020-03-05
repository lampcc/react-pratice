import { ADD, SUB } from "./actions.js";

// 初始值
const initialState = {
  num: 0
}

// reducer：创建store使用
export function numReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case ADD:
      newState.num++
      return newState
    case SUB:
      newState.num--
      return newState
    default:
      return state
  }
}