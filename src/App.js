import React from 'react';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column"
}}>
      <TodoList />
    </div>
  );
}

export default App;
