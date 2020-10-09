import React from 'react';
import TodoListApp from './components/TodoListApp'
function App() {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column"
}}>
     <TodoListApp/>
    </div>
  );
}

export default App;
