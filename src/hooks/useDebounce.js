import { useRef } from "react";

function useDebounce(fn, wait) {
  const timerRef = useRef();
  return function (...arg) {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      fn(...arg);
    }, wait);
  };
}

export default useDebounce;
