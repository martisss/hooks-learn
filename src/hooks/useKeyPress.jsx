import { useState, useRef, useEffect } from "react";
function useKeyPress(dom = document.body) {
  const [key, setKey] = useState([]);
  const isNext = useRef(true);
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.type === "keydown") {
        if (isNext.current) setKey([]);
        setKey((keys) => [...new Set([...keys, e.key])]);
        isNext.current = false;
      } else {
        isNext.current = true;
      }
    };
    dom.addEventListener("keydown", handleKeyPress);
    dom.addEventListener("keyup", handleKeyPress);
    return () => {
      dom.removeEventListener("keydown", handleKeyPress);
      dom.removeEventListener("keyup", handleKeyPress);
    };
  }, [dom]);
  return key;
}

export default useKeyPress;
