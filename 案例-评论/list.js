/**
 * 评论-列表组件
 */
import React from 'react';

// 渲染列表
const List = (props) => {
  console.log('接收到的数据：', props);
  let { list } = props;
  let items;
  if (list.length) {
    items = list.map((item) => {
      return (
        <li key={item.id}>
          <p className="pline">{item.name}</p>
          <p>{item.content}</p>
        </li>
      )
    })
    console.log(items);
  } else {
    items = <li className="nodata"><p>暂无评论！</p></li>
  }
  return (
    <ul className="list">
      {items}
    </ul>
  )



}

export default List;