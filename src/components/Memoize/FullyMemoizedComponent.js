import { memo } from "react";

function FullyMemoizedComponent(props) {
  console.log("rerendered");
  const { todoList, handleTodoList } = props;

  return (
    <div>
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <input type="checkbox" onChange={() => handleTodoList(item)} />
            {item.firstname} {item.lastname}
          </div>
        );
      })}
    </div>
  );
}

export default memo(FullyMemoizedComponent);
