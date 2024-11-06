import { useEffect } from "react";

function useTitle(path) {
  useEffect(() => {
    document.title = `Gadget Heaven || ${path}`;
    return () => {};
  }, []);
}

export default useTitle;
