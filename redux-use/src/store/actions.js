// Actions
const ADD = 'ADD', SUB = 'SUB';

// 修改状态会使用
export function addAction(pname) {
  return {
    type: ADD,
    pname
  }
}

export function subAction(pname) {
  return {
    type: SUB,
    pname
  }
}

// 异步action
export function asyncSubAction(pname) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(subAction(pname))
    }, 1000);
  }
}


export { ADD, SUB }