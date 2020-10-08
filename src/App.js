import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column"
    }}>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
