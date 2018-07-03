/**
 * @description 展示组件,todo的一个item
 */
import React from 'react'
//React 内置的类型检查功能
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

//PropTypes 包含一整套验证器，可用于确保你接收的数据是有效的
//出于性能原因，propTypes 只在开发模式下进行检查
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}

export default Todo
