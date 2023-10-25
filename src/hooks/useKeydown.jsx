import { useEffect } from "react";

export const useKeydown = (key, handler) => {
  useEffect(() => {
    const callback = (e) => {
      if (e.key === key) handler();
    };
    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [key, handler]);
};
