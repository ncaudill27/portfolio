import * as React from "react";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const useRefHeight = ref => {
  const [height, setHeight] = React.useState(null);
  const [width, setWidth] = React.useState(null);

  React.useEffect(() => {
    if (ref !== undefined && typeof window !== undefined) {
      setHeight(ref.current.getBoundingClientRect().height);
      setWidth(ref.current.getBoundingClientRect().width);

      const debouncedHandleResize = debounce(function handleResize() {
        setHeight(ref.current.getBoundingClientRect().height);
        setWidth(ref.current.getBoundingClientRect().width);
      }, 50);

      window.addEventListener("resize", debouncedHandleResize);

      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [ref]);

  return { height, width };
};

export default useRefHeight;