import React from 'react';
/**
* 列表渲染
* 1. 使用数组的map方法
* 2. 返回了一个react元素数组
* 条件渲染
* 1. 判断state.list的数组长度
* 1.1 如果是0,显示：暂无数据
* 1.2 如果大于0，显示：渲染列表
*/
const FnList = (props) => {
  console.log(props);
  const { list } = props;
  let items;
  if (list.length) {
    items = list.map((item) => {
      return (<li key={item.id}>
        <p className="pline">{item.name}</p>
        <p>{item.content}</p>
      </li>)
    })
  } else {
    items = <li className="nodata"><p>暂无数据</p></li>
  }

  return (
    <ul className="list">
      {items}
    </ul>
  )

}

export default FnList;