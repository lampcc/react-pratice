import { numReducer } from './reducers.js'
import { addAction, subAction } from './actions.js';
const { createStore } = window.Redux;
// console.log(createStore)

// 创建store
const store = createStore(numReducer);
console.log(store, store.getState());
// 监测变化
const sf = store.subscribe(() => {
  console.log('变化了：', store.getState())
})

// 更新state
store.dispatch(addAction());
store.dispatch(addAction());
store.dispatch(addAction());
// 获取state
console.log(store.getState());

// html视图显示
let view = document.getElementById('app'), btn = document.getElementById('btn');
view.innerText = store.getState().num;
btn.onclick = function () {
  // 解除监测
  store.subscribe(sf)
  store.dispatch(subAction());
  view.innerText = store.getState().num;
  console.log(store.getState());
}