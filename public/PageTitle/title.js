import { useEffect } from "react";

function useTitle(path) {
  useEffect(() => {
    document.title = `${path} || Gadget Heaven`;
    return () => {};
  }, []);
}

export default useTitle;
