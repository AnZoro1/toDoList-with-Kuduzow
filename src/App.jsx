import React, { useState } from 'react'

const App = () => {
  const todos = [
    {
      text: 'Купить бананы',
      favorite: false,
    },
    {
      text: 'Продать квартиру',
      favorite: false,
    },
    {
      text: 'Выучить уроки по JavaScript',
      favorite: false,
    },
  ]

  const [mainTodos, setMainTodos] = useState(todos)
  const [text, setText] = useState('')
  const deleteTodo = (i) => {
    const filtered = mainTodos.filter((todo, index) => {
      if (index === i) {
        return false
      }
      return true
    })

    setMainTodos(filtered)
  }
  const makeFavorite = (i) => {
    const newTodos = mainTodos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        }
      }
      return item
    })
    setMainTodos(newTodos)
  }

  const newTodos = mainTodos.map((todo, index) => {
    return (
      <div className={` todo ${todo.favorite ? 'selected' : ''}`}>
        <div className="favorite">
          <button onClick={() => makeFavorite(index)}>⭐</button>
        </div>
        <div className="todo-text">{todo.text}</div>
        <div className="actions">
          <button onClick={() => deleteTodo(index)}>x</button>
        </div>
      </div>
    )
  })
  const addTodo = () => {
    setMainTodos([
      {
        text: text,
        favorite: false,
      },
      ...mainTodos,
    ])
    setText('')
  }
  return (
    <div className="app">
      <div className="header">список дел</div>
      <div className="form">
        <input
          placeholder="Введите текст..."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>добавить</button>
      </div>
      <div className="todos">{newTodos}</div>
    </div>
  )
}

export default App
