import { useCallback, useMemo, useState } from "react";
import FullyMemoizedComponent from "./FullyMemoizedComponent";

const MemoizeBaseComponent = () => {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([
    { id: 1, firstname: "venkat", lastname: "balaji", checked: false },
    { id: 2, firstname: "swami", lastname: "nathan", checked: false },
  ]);

  const handleTodoList = useCallback(
    (id) => {
      const newList = [];

      todoList.forEach((item) => {
        newList.push({
          ...item,
          checked: item.id === id ? !item.checked : item.checked,
        });
      });

      setTodoList(newList);
    },
    [todoList]
  );

  const filteredList = useMemo(() => {
    return todoList;
  }, [todoList]);

  return (
    <div>
      <div>MemoizeBaseComponent</div>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <div>Count: {count}</div>
      <FullyMemoizedComponent
        todoList={filteredList}
        handleTodoList={handleTodoList}
      />
    </div>
  );
};

export default MemoizeBaseComponent;
