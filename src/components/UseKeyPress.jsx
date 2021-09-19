import useKeyPress from "../hooks/useKeyPress";

const UseKeyPress = () => {
  const key = useKeyPress();
  return (
    <div>
      <h1>UseKeyPress</h1>
      <span>捕获一个或多个键值</span>
      <hr />
      <label>Key pressed: {key.join("--") || "N/A"}</label>
    </div>
  );
};

export default UseKeyPress;
