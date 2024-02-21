import { useEffect } from "react";

function LifeCycleFunctionComponent(props) {
  const { count } = props;

  useEffect(() => {
    // mounting phase
  }, []);

  useEffect(() => {
    // updating phase
  }, [count]);

  useEffect(() => {
    return () => {
      // unmounting phase
    };
  }, []);

  return <div>LifeCycleFunctionComponent</div>;
}

export default LifeCycleFunctionComponent;
