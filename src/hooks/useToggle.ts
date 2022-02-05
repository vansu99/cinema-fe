import { useCallback, useState } from "react";

interface IResponseHook {
  value: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const useToggle = (initialValue = false): IResponseHook => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const open = useCallback(() => {
    setValue(true);
  }, []);

  const close = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, open, close };
};

export default useToggle;
