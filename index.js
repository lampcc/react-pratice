import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 引入组件
// import Hello from './组件创建/函数组件';
// import ClassCom from './组件创建/类组件';
// import Index from './事件绑定';
// import Index from './有状态组件';
// import Index from './01总结';
// import Index from './表单处理/受控组件';
// import Index from './案例-评论-演示';
// import Index from './案例-评论';
// import Index from './组件通讯';
// import Index from './组件通讯/兄弟之间';
// import Index from './context';
// import Index from './props/index';
// import Index from './生命周期';
// import Index from './组件封装-演示/renderProps';
// import Index from './组件封装/hoc';
import Index from './路由使用';
// import Index from './setState';

// import Index from './更新机制-演示';
// import Index from './setState/控制是否渲染';


// 使用React.createElement(）方法创建元素
// const h1 = React.createElement('h1', null, 'Shopping List');
// const li1 = React.createElement('li', null, 'Instagtam');
// const li2 = React.createElement('li', null, 'WhatsApp');
// const ul = React.createElement('ul', null, li1, li2)
// const div = React.createElement('div', { className: 'shopping-list' }, h1, ul)

// const h1 = React.createElement('h1', null, 'hello cli!')

// console.log('React.createElement()', li2);

// 使用jsx
/**
 * 1. 声明jsx的react元素
 * 2. ReactDOM.render(）
 */

// const divs = (
//   <div className="shopping-list">
//     <h1>Shopping List</h1>
//     <ul>
//       <li>Instagtam</li>
//       <li>WhatsApp</li>
//     </ul>
//   </div>
// )

// const h1 = <h1>hello jsx!</h1>;
// console.log('jsx', h1, divs);

// const div2 = (
//   <div>
//     <label htmlFor="sl">选择</label>
//     <input type="radio" name="" id="sl" />
//   </div>
// );

//jsx的表达式使用
// const name = '小红';

// let fn = () => {
//   return <h3>1000</h3>
// }
// const jsx = (
//   <div>
//     <h1>{name}</h1>
//     <p>{'小明'}</p>
//     <p>{100}</p>
//     <p>{fn()}</p>
//     <p>{true ? '今天天气真好' : '明天下雪'}</p>

//     {/* <p>{if(true) {

//     }}</p> */}
//   </div>
// )

// jsx的条件渲染
// 简单实现loading
// 1. 使用三元表达式

// let loaded = true;
// const loading = (
//   loaded ? <span> 加载完毕！</span> : <span>努力加载中....</span>
// )

// 2. if/else
// const fn = (ld) => {
//   if (ld) {
//     return <span> 加载完毕</span>
//   } else {
//     return <h3>加载中....</h3>
//   }
// }

// const loading2 = (
//   <div>{fn(false)}</div>
// )

// jsx的列表渲染
// const songs = [
//   { id: 1, name: '野狼dicso' },
//   { id: 2, name: '像我这样的人' },
//   { id: 3, name: '桥边姑娘' }
// ];

// const divs = (
//   <ul>
//     {
//       // [<li>1</li>, <li>2</li>]
//       songs.map((item) => <li key={item.id}>{item.name}</li>)
//     }
//   </ul>
// )

// const di = <p>{[10, 20, <h2>你好</h2>], true ? '今天天气真好' : '明天下雪'}</p>

// jsx样式处理
// 1. 行内样式
// 2. class样式表
// const h1 = <h1 className="h1" style={{ color: 'red', fontSize: '68px', backgroundColor: '#eee' }}>hello!</h1>




ReactDOM.render(<Index />, document.getElementById('root'));


