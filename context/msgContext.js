import React from 'react';

const MsgContext = React.createContext();
console.log(MsgContext);

const { Provider, Consumer } = MsgContext;

let a = 100;

// 导出变量
export {
  a,
  Provider,
  Consumer
}


// 默认导出对象
export default MsgContext;
