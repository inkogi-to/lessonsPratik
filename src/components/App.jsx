import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './ColorPicker/ColorPiker';
// import Form from './TodoList/Form';
import { GlobalStyle } from './GlobalStyle.styled';
import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor';
import initialTodos from './todos.json';
import Filter from './Filter';

// const ColorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CD964' },
//   { label: 'blue', color: '#007AFF' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#DE22FF' },
//   { label: 'indigo', color: '#3f51b5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  delteTodos = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodocount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Counter  /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}
        <div>
          <p>{totalTodocount}</p>
          <p>{completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.delteTodos}
          onToggleCompleted={this.toggleCompleted}
        />
        <GlobalStyle />
      </>
    );
  }
}
export default App;
