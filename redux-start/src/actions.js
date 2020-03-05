// Actions
const ADD = 'ADD', SUB = 'SUB';

// 修改状态会使用
export function addAction(params) {
  return {
    type: ADD,
    params
  }
}

export function subAction(params) {
  return {
    type: SUB,
    params
  }
}

export { ADD, SUB }