import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = function (state, action) {
  switch (action.type) {
    case "COMPLETE": {
      console.log("reached");
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: !item.complete };
        }

        return item;
      });
    }

    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default UseReducerExample;
