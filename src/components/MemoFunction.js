import { memo } from "react";

const MemoFunction = () => {
  console.log(
    "MemoFunction will not re-renders until unless its props or state changes"
  );

  return <div>MemoFunction</div>;
};

export default memo(MemoFunction);
