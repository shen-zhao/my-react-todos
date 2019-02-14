import React, { Component } from 'react';
import VisibleTodoList from './containers/VisiableTodoList';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
